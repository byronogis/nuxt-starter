// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
  },
  /**
   * Nuxt will include it to all the pages of your application.
   * @see https://nuxt.com/docs/getting-started/styling#the-css-property
   */
  css: [
    '~/assets/styles/transition.css',
  ],
  debug: false,
  devtools: { enabled: true },
  ssr: false,
})
