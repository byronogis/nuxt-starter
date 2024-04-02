// @ts-check
import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu(
    {
      unocss: true, // dep: @unocss/eslint-config
      formatters: true, // dep: eslint-plugin-format
    },
    {
      rules: {
        'no-console': 'warn',

        /**
         * Always use curly braces for blocks and new line.
         * @see https://eslint.org/docs/latest/rules/curly#all
         * @see https://eslint.style/rules/default/max-statements-per-line#max
         * @see https://eslint.style/rules/default/brace-style#stroustrup
         */
        'curly': ['error', 'all'],
        '@stylistic/max-statements-per-line': ['error', { max: 1 }],
        '@stylistic/brace-style': ['error', 'stroustrup'],
      },
    },
  ),
)
