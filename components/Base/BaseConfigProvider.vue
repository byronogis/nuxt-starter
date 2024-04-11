<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * Customizing theme for NaiveUI (Global).
 * @see https://www.naiveui.com/en-US/os-theme/docs/customize-theme
 */
const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#000000',
  },
  // ...
}

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: '#FFFFFF',
  },
  // ...
}

const theme = computed(() => useColorMode().value)
</script>

<template>
  <n-config-provider
    preflight-style-disabled
    inline-theme-disabled
    :theme="theme === 'dark' ? darkTheme : undefined"
    :theme-overrides="theme === 'dark' ? darkThemeOverrides : lightThemeOverrides"
  >
    <slot />

    <n-global-style />
  </n-config-provider>
</template>

<style scoped lang="postcss"></style>
