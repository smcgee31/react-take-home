module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateRows: {
        layout: '60px minmax(auto, 1fr) 100px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
