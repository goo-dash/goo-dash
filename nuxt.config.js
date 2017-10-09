module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'goo-dash',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A consolidated list of Google Consoles/Dashboards' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  // <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: ['axios', 'materialize-css']
  },

  css: [
    // 'materialize-css',
    // '@/node_modules/materialize-css/dist/css/materialize.css'
  ],

  modules: [
    ['@nuxtjs/google-analytics', { ua: 'UA-107774834-1' }],
    ['@nuxtjs/google-tag-manager', { id: 'GTM-KVGVRMB' }],
  ]
}
