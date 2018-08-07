module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' }
    }
  },
  assetPrefix: '/nextjs-github-pages-demo',
  webpack: config => {
    config.module.rules = config.module.rules.map(rule => {
      if (rule.loader === 'babel-loader') {
        rule.options.cacheDirectory = false
      }
      return rule
    })
    return config
  }
}
