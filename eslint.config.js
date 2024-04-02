// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      unocss: true, // dep: @unocss/eslint-config
      formatters: true, // dep: eslint-plugin-format
    },
  ),
)
