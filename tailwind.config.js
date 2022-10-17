/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // TODO use proper typography definitions
    fontSize: {
      button: ["1.125rem", "1.2"], // 18px
      link: ["1.125rem", "1.2"], // 18px
      "link-sm": ["1rem", "1.2"], // 16px
      sm: ["0.75rem", "1.2"], // 12px
      base: ["1rem", "1.6"], // 16px
      lg: ["1.25rem", "1.6"], // 20px
      xl: ["1.5rem", "1.4"], // 24px
      // headers
      ["2xl"]: ["1.5625rem", "1.2"], // 25px
      ["3xl"]: ["1.9375rem", "1.2"], // 31px
      ["4xl"]: ["2.4375rem", "1.2"], // 39px
      ["5xl"]: ["3.0625rem", "1.4"], // 49px
      ["6xl"]: ["3.75rem", "1.1"], // 60px
      ["7xl"]: ["4.75rem", "1.1"], // 76px
    },
    extend: {},
  },
  plugins: [],
};
