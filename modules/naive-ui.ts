import { addComponent, defineNuxtModule } from '@nuxt/kit'

export default defineNuxtModule({
  setup() {
    // import { MyComponent as MyAutoImportedComponent } from 'my-npm-package'

    const naiveUiComponents = [
      'NConfigProvider',
      'NGlobalStyle',
      'NButton',
      'NInput',
      'NTreeSelect',
    ]

    naiveUiComponents.forEach((component) => {
      addComponent({
        name: component,
        export: component,
        filePath: 'naive-ui',
      })
    })
  },
})
