module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: {
          500: "hsl(169,24%,55%)",
          600: "hsl(175,24%,55%)",
          700: "hsl(180,24%,55%)",
          800: "hsl(205,24%,55%)",
          900: "hsl(205,24%,42%)",
        },
        gray: {
          500: "hsl(0,0%,98%)",
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
