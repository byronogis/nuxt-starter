import { addComponent, addImports, defineNuxtModule } from '@nuxt/kit'
import NaiveUI from 'naive-ui'

export default defineNuxtModule({
  setup() {
    /**
     * NaiveUI Components
     */
    const NaiveUIComponents = Object.keys(NaiveUI).filter(name =>
      /^(N[A-Z]|n-[a-z])/.test(name),
    )

    NaiveUIComponents.forEach((name) => {
      addComponent({
        name,
        export: name,
        filePath: 'naive-ui',
      })
    })

    /**
     * NaiveUI Composables
     */
    const NaiveUIComposables = [
      'useDialog',
      'useMessage',
      'useNotification',
      'useLoadingBar',
      'useDialogReactiveList',
      'useThemeVars',
      'useModal',
    ]

    NaiveUIComposables.forEach((name) => {
      addImports({
        name,
        as: name,
        from: 'naive-ui',
      })
    })
  },
})
