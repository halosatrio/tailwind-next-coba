module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Libre Baskerville"],
      sans: ["Raleway"],
    },
    extend: {
      colors: {
        crimson: {
          500: "hsl(9,70%,22%)",
        },
        gray: {
          550: "hsl(0,0%,98%)",
          750: "hsl(240,12%,33%)",
        },
        dark: {
          200: "hsl(240,1%,19%)",
          500: "hsl(169,19%,16%)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
