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
declare const LOYALTY_PROTOCOL_CONFIG: Record<string, Config>;
export default LOYALTY_PROTOCOL_CONFIG;
