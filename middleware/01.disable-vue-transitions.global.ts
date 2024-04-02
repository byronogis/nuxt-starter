/**
 * wish to disable Vue transitions if the user's browser supports the newer, native web API
 * @see https://nuxt.com/docs/getting-started/transitions#view-transitions-api-experimental
 */
export default defineNuxtRouteMiddleware((to) => {
  if (import.meta.server || !document.startViewTransition)
    return

  // Disable built-in Vue transitions
  to.meta.pageTransition = false
  to.meta.layoutTransition = false
})
