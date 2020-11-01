export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'mangapin',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome'
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: ['faSearch', 'faRandom', 'faCog'],
      brands: []
    }
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  script:[
    {src: "https://kit.fontawesome.com/b569de1445.js", crossorigin: "anonymous"},
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
}
