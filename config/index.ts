import { HT_CONFIG } from "./ht-kstore-india";
import { TIME_NOW_CONFIG } from "./times-now-kstore-india";

export type ImageUrl = Record<"prod" | "stage", string>;
export type Currency = {
  name: string;
  logo: ImageUrl;
  decimalPoints: number;
};

export type CurrencyNames = "k_cash";

export type LoyaltyCurrencyNames = "times_point";

export type Config = {
  currency: Record<CurrencyNames, Currency> &
    Partial<Record<LoyaltyCurrencyNames, Currency>>;
  showHeader: boolean;
  tenantId: string | undefined;
  fontLink: string | undefined;
  kStoreLogo: ImageUrl | undefined;
  entryPoint: string;
  assetMap?: {
    times_point?: string;
  };
  rkade?: {
    spinWheel?: {
      hideBgIconColor?: boolean;
    };
    faqData?: {
      question: string;
      answer: string | { text: string; list: string[] };
    }[];
  };
  loyaltyDashboard?: {
    loyaltyCurrency: LoyaltyCurrencyNames | CurrencyNames;
  };
  kstore: {
    supportEmail?: string;
  };
};

export const LOYALTY_PROTOCOL_CONFIG: Record<string, Config> = {
  "ht-kstore-india": HT_CONFIG,
  "times-now-kstore-india": TIME_NOW_CONFIG,
};
