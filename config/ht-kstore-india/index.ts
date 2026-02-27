import { Config } from "..";

export const HT_CONFIG: Config = {
  currency: {
    k_cash: {
      name: "Coins",
      logo: {
        stage:
          "https://images.hindustantimes.com/sso/prod/loyalty-reward-sdk/images/goCoinHT.svg",
        prod: "https://images.hindustantimes.com/sso/prod/loyalty-reward-sdk/images/goCoinHT.svg",
      },
      decimalPoints: 0,
    },
  },
  showHeader: false,
  kStoreLogo: undefined,
  tenantId: undefined,
  entryPoint: "https://www.hindustantimes.com/",
  fontLink:
    "https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,100..700;1,100..700&display=swap",
  kstore: {},
};
