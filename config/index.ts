import { HT_CONFIG } from "./ht-kstore-india";
import { TIME_NOW_CONFIG } from "./times-now-kstore-india";

type Currency = {
  name: string;
  logo: string;
  decimalPoints: number;
};

type CurrencyNames = "K-Cash" | "K-Points" | "rKGeN";

type Config = {
  currency: Record<CurrencyNames, Currency>;
  showHeader: boolean;
  tenantId: string | undefined;
  fontLink: string | undefined;
  kStoreLogo: string | undefined;
  assetMap?: {
    times_point?: string;
  };
};

const LOYALTY_PROTOCOL_CONFIG: Record<string, Config> = {
  "ht-kstore-india": HT_CONFIG,
  "times-now-kstore-india": TIME_NOW_CONFIG,
};

export default LOYALTY_PROTOCOL_CONFIG;
