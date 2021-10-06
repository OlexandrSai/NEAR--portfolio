module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        indigo: {
          500: "#5345F5",
        },
        purple: {
          500: "#7926FF",
        },
        gray: {
          900: "#080514",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      boxSizing: ['hover', 'focus'],
    },
  },
  plugins: [],
}
