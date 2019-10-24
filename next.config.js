const withSass = require('@zeit/next-sass')

const config = withSass({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  }
})

module.exports = config