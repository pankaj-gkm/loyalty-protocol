import CryptoJS from "crypto-js";

export const decryptLoyaltySessionToken = (
  token: string | undefined,
  storeIdentifier: string | undefined,
) => {
  try {
    if (!token || !storeIdentifier)
      throw new Error("No token or store identifier passed");

    let salt;
    const env = process.env.LOYALTY_SALT;

    if (typeof env === "object") {
      salt = env[storeIdentifier];
    } else {
      salt = env ? JSON.parse(env)[storeIdentifier] : undefined;
    }

    if (!salt)
      throw new Error(`No Salt found for storeIdentifier - ${storeIdentifier}`);

    const key = CryptoJS.enc.Utf8.parse(salt);
    const decrypted = CryptoJS.AES.decrypt(token?.toString(), key, {
      keySize: 128 / 8,
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return decrypted?.toString(CryptoJS.enc.Utf8) || token;
  } catch {
    console.error("Malformed token", token, storeIdentifier);
    return token;
  }
};

export const encryptLoyaltySessionToken = (
  token: string,
  storeIdentifier: string,
) => {
  let salt;
  const env = process.env.LOYALTY_SALT as string | Record<string, string>;

  if (typeof env === "object") {
    salt = env[storeIdentifier];
  } else {
    salt = env ? JSON.parse(env)[storeIdentifier] : undefined;
  }

  const key = CryptoJS.enc.Utf8.parse(salt);
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(token?.toString()),
    key,
    {
      keySize: 128 / 8,
      iv: key,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    },
  );
  return encrypted?.toString();
};
