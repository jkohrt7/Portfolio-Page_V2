module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
      },
      fontFamily: {
        body: ['Nunito']
      },
      minWidth: {
        "20": "20px"
      },
      backgroundImage: {
        'hero-pattern': "url('img/endless-constellation.svg')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
