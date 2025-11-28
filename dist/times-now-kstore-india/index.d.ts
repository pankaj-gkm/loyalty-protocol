export declare const TIME_NOW_CONFIG: {
    currency: {
        k_cash: {
            name: string;
            logo: string;
            decimalPoints: number;
        };
        times_point: {
            name: string;
            logo: string;
            decimalPoints: number;
        };
    };
    showHeader: boolean;
    kStoreLogo: string;
    tenantId: string;
    fontLink: undefined;
    assetMap: {
        times_point: string;
    };
    rkade: {
        spinWheel: {
            hideBgIconColor: boolean;
        };
        faqData: ({
            question: string;
            answer: string;
        } | {
            question: string;
            answer: {
                text: string;
                list: string[];
            };
        })[];
    };
    loyaltyDashboard: {
        loyaltyCurrency: "times_point";
    };
};
