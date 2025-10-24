const { HT_CONFIG } = require("./ht-kstore-india/index.js");
const { INDIAN_EXPRESS } = require("./indian-express/index.js");
const { TIME_NOW_CONFIG } = require("./times-now-kstore-india/index.js");

window.LOYALTY_PROTOCOL_CONFIG = {
  "ht-kstore-india": HT_CONFIG,
  "indian-express": INDIAN_EXPRESS,
  "times-now-kstore-india": TIME_NOW_CONFIG,
};
