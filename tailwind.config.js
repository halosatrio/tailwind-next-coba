module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      serif: ["Libre Baskerville"],
      sans: ["Raleway"],
    },
    extend: {
      maxWidth: {
        "4/5": "80%",
      },
      colors: {
        crimson: {
          400: "#cd5c5c",
          500: "hsl(348,83%,47%)",
          700: "hsl(0, 100%, 25%)",
        },
        wheat: "hsl(39,77%,83%)",
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
