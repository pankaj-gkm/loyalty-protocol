const { HT_CONFIG } = require("./ht-kstore-india/index.js");
const { TIME_NOW_CONFIG } = require("./times-now-kstore-india/index.js");

window.LOYALTY_PROTOCOL_CONFIG = {
  "ht-kstore-india": HT_CONFIG,
  "times-now-kstore-india": TIME_NOW_CONFIG,
};
