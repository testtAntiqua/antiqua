module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#33ee12",
        gray: {
          darkest: "#161616",
          dark: "#3c4858",
          default: "#dadada",
          light: "#e0e6ed",
          lightest: "#f9fafc",
        },
      },
      fontFamily: {
        primary: ["IBM Plex Sans", "sans-serif"],
        epilogue: ["Epilogue", "sans-serif"],
      },

      transitionProperty: {
        width: "width",
      },

      boxShadow: {
        button: " 0px 6px 11px -2px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
