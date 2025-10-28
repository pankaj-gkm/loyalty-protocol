import { HT_CONFIG } from "./ht-kstore-india";
import { TIME_NOW_CONFIG } from "./times-now-kstore-india";

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
  fontLink: string | undefined;
};

const LOYALTY_PROTOCOL_CONFIG: Record<string, Config> = {
  "ht-kstore-india": HT_CONFIG,
  "times-now-kstore-india": TIME_NOW_CONFIG,
};

export default LOYALTY_PROTOCOL_CONFIG;
