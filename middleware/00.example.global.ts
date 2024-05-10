export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.dev && import.meta.client) {
    console.log('00.example.global', to, from)
  }
})
