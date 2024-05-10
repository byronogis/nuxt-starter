/**
 * Factory function to create useFetch and useAsyncData with defaults (waiting)
 * @see https://github.com/nuxt/nuxt/issues/14736
 */

export default defineNuxtPlugin(() => {
  // @see https://github.com/unjs/ofetch?tab=readme-ov-file#%EF%B8%8F-create-fetch-with-default-options
  const $customFetch = $fetch.create({
    timeout: 5000,

    onRequest({ request, options }) {
      console.log('onRequest {request, options}', { request, options })
    },

    onRequestError({ request, options, error }) {
      console.log('onRequestError {request, options, error}', { request, options, error })
    },

    onResponse({ request, options, response }) {
      console.log('onResponse {request, options, response}', { request, options, response })
    },

    onResponseError({ request, options, response }) {
      console.log('onResponseError {request, options, response}', { request, options, response })
    },
  })
  // Expose to useNuxtApp().$customFetch
  return {
    provide: {
      customFetch: $customFetch,
    },
  }
})
