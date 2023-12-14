export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'meuapp',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      //hid serve como identificador
      { hid: 'description', name: 'description', content: 'Minha descrição' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //Variáveis que estarão expostas no front-end
  publicRuntimeConfig: {
    youtube_api_key: process.env.YOUTUBE_API_KEY
  },
  //Variáveis sensíveis, apenas disponíveis no server-side
  privateRuntimeConfig: {
    facebook_api_key: process.env.FACEBOOK_API_KEY
  },

  //MIDDLEWARE QUE VAI SER APLICADO A TODAS AS ROTAS
  //Se tiver vários, colocar dentro de array []
  // router: {
  //   middleware: 'auth'
  // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    //@ é um alias para a raiz do projeto
    '@/plugins/my-plugin',
    '@/plugins/dayjs',
    '@/plugins/vtooltip'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
