const pkg = require('./package')

module.exports = {
  mode: 'universal',

  env: {
    NODE_ENV: process.env.NODE_ENV,
    SERVER_HOST: process.env.SERVER_HOST,
    SERVER_PORT: process.env.SERVER_PORT,
  },

  buildDir: process.env.NUXT_BUILD_DIR || '.nuxt',

  server: {
    host: process.env.SERVER_HOST || '127.0.0.1',
    port: process.env.SERVER_PORT || 3000,
  },

  // Headers of the page
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#ff4758' },

  // Global CSS
  css: [
    '~assets/main.styl',
  ],

  // Plugins to load before mounting the App
  plugins: [
    { src: '~plugins/redirect' },
  ],

  // Nuxt.js modules
  modules: [
    ['@nuxtjs/router', { keepDefaultRouter: true }],
    ['nuxt-vuex-router-sync', {}],
  ],

  // Build
  build: {
    extractCSS: true,
    transpile: [],
    // extend webpack config here
    extend(config, ctx) {
      // extend only webpack config for client-bundle
      if (ctx.isClient) {
        config.devtool = process.env.APPLICATION_STAGE === 'production' ? false : 'inline-source-map'
      }
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    postcss: {
      plugins: {
        'tailwindcss': {
          theme: {
            // screens: {
            //   xs: '340px',
            //   sm: '640px',
            //   md: '768px',
            //   lg: '1024px',
            //   xl: '1280px',
            // },
            boxShadow: {
              // offset-x | offset-y | blur-radius | spread-radius | color
              'strong': '3px 3px 4px 2px rgba(0,0,0,0.2)',
              'white': '1px 2px 3px 1px rgba(255,255,255,0.2)',
            },
            extend: {
              // spacing: {
              //   '20': '18rem',
              // },
              width: {
                '1/10': '10%',
                '2/10': '20%',
                '3/10': '30%',
                '4/10': '40%',
                '5/10': '50%',
                '6/10': '60%',
                '7/10': '70%',
                '8/10': '80%',
                '9/10': '90%',
              }
            }
          }
        },
        'autoprefixer': {},
      }
    }
  },
  dir: {
  //   assets: 'assets',
  //   layouts: 'layouts',
  //   middleware: 'middleware',
  //   pages: 'pages',
  //   static: 'static',
  //   store: 'store'
  },
  router: {
    base: process.env.NUXT_BASE_DIR || '/',
    // prefetchLinks: false,
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: [
      'middleware',
    ],
  }
}
