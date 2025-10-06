var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// config/ht-kstore-india/index.js
var ht_kstore_india_exports = {};
__export(ht_kstore_india_exports, {
  HT_CONFIG: () => HT_CONFIG
});
var HT_CONFIG;
var init_ht_kstore_india = __esm({
  "config/ht-kstore-india/index.js"() {
    "use strict";
    HT_CONFIG = {
      currency: {
        name: "GO Coin",
        logo: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3YxMTYxLWItMDQ0LnBuZw.png"
      },
      showHeader: false
    };
  }
});

// config/indian-express/index.js
var indian_express_exports = {};
__export(indian_express_exports, {
  INDIAN_EXPRESS: () => INDIAN_EXPRESS
});
var INDIAN_EXPRESS;
var init_indian_express = __esm({
  "config/indian-express/index.js"() {
    "use strict";
    INDIAN_EXPRESS = {
      currency: {
        name: "Minecraft Coin",
        logo: "https://p1.hiclipart.com/preview/896/990/447/minecraft-hd-icon-mac-pc-minecraft-icon-512-png-icon.jpg"
      }
    };
  }
});

// config/config.js
var { HT_CONFIG: HT_CONFIG2 } = (init_ht_kstore_india(), __toCommonJS(ht_kstore_india_exports));
var { INDIAN_EXPRESS: INDIAN_EXPRESS2 } = (init_indian_express(), __toCommonJS(indian_express_exports));
window.LOYALTY_PROTOCOL_CONFIG = {
  "ht-kstore-india": HT_CONFIG2,
  "indian-express": INDIAN_EXPRESS2
};
