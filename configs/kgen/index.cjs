const config = {
  colors: {
    "primary-color": "140, 255, 5", // #8cff05
    "secondary-color": "31, 51, 56", // #1f3338
    "background-color": "65, 95, 102", // #415f66
    "tertiary-color": "134, 166, 166", // #86a6a6
    "text-color": "219, 237, 241", // #dbedf1
    "accent-text-color": "190, 220, 218", // #bedcda
    "error-color": "255, 115, 115", // #ff7373
    white: "255, 255, 255", // #ffffff
    black: "0, 0, 0", // #000000
    "processing-color": "255, 158, 44", // #ff9e2c
    "partial-color": "255, 195, 44", // #ffc32c
    "success-color": "38, 216, 109", // #26d86d
    "failed-color": "255, 115, 115", // #ff7373
  },
  fonts: {
    trim: '"Trim"',
    "trim-mono": '"Trim-Mono"',
    "trim-poster": '"Trim-Poster"',
    "trim-poster-lean": '"Trim-Poster-Lean"',
  },
  opacities: [0.1, 0.2, 0.25, 0.3, 0.4, 0.5, 0.6, 0.7, 0.75, 0.8, 0.9],
  colorWithOpacities: [
    "primary-color",
    "secondary-color",
    "background-color",
    "tertiary-color",
    "text-color",
    "accent-text-color",
  ],
  storeConfig: {
    showHeader: false,
    currency: {
      name: "GO Coin",
      logo: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3YxMTYxLWItMDQ0LnBuZw.png",
    },
  },
};

module.exports = { config };
