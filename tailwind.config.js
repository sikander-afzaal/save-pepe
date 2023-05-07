const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lapsus", ...defaultTheme.fontFamily.sans],
        comic: ["Comic Neue"],
      },
      backgroundImage: {
        btn: "url('/btn-bg.png')",
        hero: "url('/hero-bg.png')",
        tokenomic: "url('/tokenomic-bg.png')",
        faq: "url('/faq-bg.png')",
        greenGr:
          "linear-gradient(180deg, rgba(37, 137, 75, 0.2) 0%, rgba(143, 218, 100, 0.2) 100%)",
        greenBorder: "linear-gradient(180deg, #25894B 0%, #8FDA64 100%)",
      },
      colors: {
        body: "#08150F",
        main: "#8FDA64",
      },
      backgroundSize: {
        fill: "100% 100%",
      },
      dropShadow: {
        marqee: "0px 2px 0px #000000",
      },
    },
  },
  plugins: [],
};
