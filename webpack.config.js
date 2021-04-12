const path = require('path');

module.exports = {
  entry: './src/game.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
};