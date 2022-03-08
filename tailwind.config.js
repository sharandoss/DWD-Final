module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'body': '#17171F',
        'selected-text': '#A3A3FF',
        'theme': '#ff7849',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#13ce66',
        'input-border': '#565666',
        'input': '#13ce66'
      },
      fontFamily: {
        'poppins': ["'Poppins'", 'sans-serif']
      }
    },
    module.exports = {
      theme: {
        // ...
      },
      plugins: [
        require('@tailwindcss/aspect-ratio'),
        // ...
      ],
    }
  },
  variants: {
    extend: {},
  },

}
