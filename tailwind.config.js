module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          500: "#949490",
          900: "#141516",
          "900_b5": "#141516b5",
          "900_26": "#14151626",
          "900_82": "#14151682",
        },
        blue_gray: { 100: "#d9d9d9" },
        black: { 900: "#000000" },
        light_blue: { 300: "#51b5f2", 500: "#009eff" },
        light_green: { 50: "#f3f2e7" },
        red: { A400_ce: "#e80f36ce" },
        white: { A700: "#ffffff" },
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "16px 22px  46px 1px #14151626" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
