// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      meta: [
        { "charset": "utf-8" },
        { name: 'viewport', content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0' },
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge,chrome=1' },
        { name: 'renderer', content: 'webkit' },
      ],
      link: [
        // { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  /**
   * It will be merged with app.config file as default value.
   * @see https://nuxt.com/docs/getting-started/configuration#app-configuration
   */
  appConfig: {
    foo: 'bar',
  },
  /**
   * Nuxt will include it to all the pages of your application.
   * @see https://nuxt.com/docs/getting-started/styling#the-css-property
   */
  css: [
    '@unocss/reset/tailwind-compat.css',
    '~/assets/styles/transition.css',
  ],
  debug: false,
  devServer: {
    host: [ 'localhost' ],
    port: 3000,
  },
  devtools: { enabled: true },
  experimental: {
    viewTransition: true,
  },
  modules: [
    '@unocss/nuxt',
  ],
  /**
   * By default, Nuxt comes with the following plugins already pre-configured:
   * postcss-import: Improves the @import rule
   * postcss-url: Transforms url() statements
   * autoprefixer: Automatically adds vendor prefixes
   * cssnano: Minification and purge
   * @see https://nuxt.com/docs/getting-started/styling#using-postcss
   */
  postcss: {},
  ssr: false,
})
