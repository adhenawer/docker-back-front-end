module.exports = {
  entry: './frontend/main.js',
  output: {
    filename: './frontend/app.js'
  },
  devServer: {
    port: 7000,
  },
  watch: true,
};