/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3346ff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      letterSpacing: {
        space: ".4rem",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, theme }) {
      const justifyContent = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        around: "space-around",
        between: "space-between",
        evenly: "space-evenly",
        stretch: "stretch",
      };
      const alignItems = {
        start: "flex-start",
        center: "center",
        end: "flex-end",
        stretch: "stretch",
        baseline: "baseline",
      };

      const inlineLayoutsUtilities = {};
      const stackLayoutsUtilities = {};

      for (let justify in justifyContent) {
        for (let items in alignItems) {
          inlineLayoutsUtilities[`.l-inline-${justify}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          inlineLayoutsUtilities[`.l-inline-${justify}-${items}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "row",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          stackLayoutsUtilities[`.l-stack-${justify}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-${items}`] = {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
          stackLayoutsUtilities[`.l-stack-${justify}-${items}-nowrap`] = {
            display: "flex",
            flexWrap: "nowrap",
            flexDirection: "column",
            justifyContent: justifyContent[justify],
            alignItems: alignItems[items],
          };
        }
      }

      addUtilities(inlineLayoutsUtilities, ["responsive"]);
      addUtilities(stackLayoutsUtilities, ["responsive"]);
    }),
  ],
};
