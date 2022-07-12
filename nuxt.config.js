export default {
  ssr: false,
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ekster',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, user-scalable=no, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0 user-scalable=0'
      },
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script: [
      {src: '../js/tiny-slider.js'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/normalize.scss',
    '@/assets/scss/fonts.scss',
    '@/assets/scss/tiny-slider.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  router: {
    mode: 'history'
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['@/assets/scss/variables.scss']
  },
  generate: {
    dir: '../dist_server'
  },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    target: 'static'
    // target: 'server'
  }
}
