import { HT_CONFIG } from "./ht-kstore-india";
import { INDIAN_EXPRESS } from "./indian-express";

type Config = {
  currency: {
    "K-Cash": {
      name: string;
      logo: string;
    };
    "K-Points": {
      name: string;
      logo: string;
    };
    rKGeN: {
      name: string;
      logo: string;
    };
  };
  showHeader: boolean;
  tenantId: string | undefined;
};

const LOYALTY_PROTOCOL_CONFIG: Record<string, Config> = {
  "ht-kstore-india": HT_CONFIG,
  "indian-express": INDIAN_EXPRESS,
};

export default LOYALTY_PROTOCOL_CONFIG;
