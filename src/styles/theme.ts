export const theme = {
  colors: {
    gray50: "#505050",
    gray60: "#aaa",

    gradientRoseTransparent:
      "linear-gradient(0deg, rgba(247, 0, 255,1) 10%, rgba(255, 0, 60,1) 50%, rgba(18,18,18,0) 95%)",
    gradientRoseNormal:
      "linear-gradient(180deg, rgba(247, 0, 255,1) 0%, rgba(255, 0, 60,1) 100%)",

    gradientBlueTransparent:
      "linear-gradient(0deg, rgba(0,41,255,1) 10%, rgba(0,255,255,1) 50%, rgba(18,18,18,0) 95%)",
    gradientBlueNormal:
      "linear-gradient(180deg, rgba(0,41,255,1) 0%, rgba(0,255,255,1) 100%)",

    gradientRedTransparent:
      "linear-gradient(0deg, #FF0000 10%, #FFA800 50%, rgba(18,18,18,0) 95%)",
    gradientRedNormal: "linear-gradient(180deg, #FF0000 0%, #FFA800 100%)",

    gradientGreenTransparent:
      "linear-gradient(0deg, #00FF19 10%, #FFA800 50%, rgba(18,18,18,0) 95%)",
    gradientGreenNormal: "linear-gradient(180deg, #00FF19 0%, #FFA800 100%)",

    blue40: "#3AB8FF",

    rose40: "#f700ff",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
};

export type ThemeProps = typeof theme;
