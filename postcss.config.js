module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-import': {
      path: 'src',
    },
    'postcss-preset-env': {
      stage: 0,
    },
  },
};