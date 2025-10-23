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
};
declare const LOYALTY_PROTOCOL_CONFIG: Record<string, Config>;
export default LOYALTY_PROTOCOL_CONFIG;
