import { addImports, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    const nameList = [
      'defu',
    ]

    nameList.forEach((name) => {
      addImports({
        name,
        as: name,
        from: 'defu',
      })
    })
  },
})
