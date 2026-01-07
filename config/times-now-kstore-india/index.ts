import { Config } from "..";

export const TIME_NOW_CONFIG: Config = {
  currency: {
    k_cash: {
      name: "Times Cash",
      logo: "https://pre-prod-admin-bucket.indi.gg/website-images/timesCash.png",
      decimalPoints: 0,
    },
    times_point: {
      name: "Coins",
      logo: "https://pre-prod-admin-bucket.indi.gg/website-images/timesCoin.png",
      decimalPoints: 0,
    },
  },
  showHeader: true,
  kStoreLogo:
    "https://pre-prod-admin-bucket.indi.gg/website-images/timesKstoreLogo.png",
  tenantId: "times",
  entryPoint: "https://www.timesnownews.com/",
  fontLink: undefined,
  assetMap: {
    times_point: "K-Points",
  },
  rkade: {
    spinWheel: {
      hideBgIconColor: true,
    },
    faqData: [
      {
        question: "What is Spin & Win?",
        answer:
          "Spin & Win is a fun, chance-based feature that lets you convert your Coins into Times Cash using Spinwheel games. Each attempt gives you a chance to win Times Cash, Coins or maybe just try again next time.",
      },
      {
        question: "How do I participate in Spinwheel?",
        answer:
          "Choose either Spinwheel, spend a small number of Coins to participate, and receive an outcome — which could be more coins, Times Cash, or a “Try Again”.",
      },
      {
        question: "What outcomes can I get from the games?",
        answer: {
          text: "The outcome is random and varies by game and participation.",
          list: [
            "“Try Again” (no win this round)",
            "Coins (bonus back)",
            "Times Cash (your reward!)",
          ],
        },
      },
      {
        question: "How much does each participant cost?",
        answer:
          "Each spin participant costs a fixed amount of Coins. This can vary from 100 to 10000 Coins. You need to select the desired amount before you confirm the participation.",
      },
      {
        question: "Can I win more than I spend?",
        answer: "Yes! Depending on the outcome, you can win more coins.",
      },
      {
        question: "What happens when I get “Try Again”?",
        answer:
          "“Try Again” means you didn’t win anything in that round. You can participate again by spending more coins.",
      },
      {
        question: "Is there a limit to how many times I can participate?",
        answer:
          "The limit is your Coins balance. If you run out of Coins, you will need to earn more to participate rKade again.",
      },
      {
        question: "How are the outcomes decided?",
        answer:
          "Outcomes are decided using a fair and randomized chance algorithm, similar to other gamified experiences.",
      },
      {
        question: "Do I need a wallet to receive Times Cash?",
        answer: "No, Times Cash will go directly to your Wallet.",
      },
      {
        question: "Can I track my game history and rewards?",
        answer:
          "Yes, your participation history and rewards (Coins spent, outcomes, coins received) will be available in the history section.",
      },
      {
        question: "Are the tokens I win usable or tradable?",
        answer:
          "Times Cash received through rKade are the same as Platform Tokens earned via Faridrop Campaign. You can use or trade them with $KGEN (in the future) based on platform rules.",
      },
      {
        question: "What if my Coins aren’t deducted or I don’t receive coins?",
        answer:
          "If you experience an error, please contact support - timesloyalty.program@timesgroup.com",
      },
    ],
  },
  loyaltyDashboard: {
    loyaltyCurrency: "times_point" as const,
  },
  kstore: {
    supportEmail: "timesloyalty.program@timesgroup.com",
  },
};
