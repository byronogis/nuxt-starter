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

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')
</script>

<template>
  <n-config-provider

    inline-theme-disabled preflight-style-disabled
    :theme="isDark ? darkTheme : undefined"
    :theme-overrides="isDark ? darkThemeOverrides : lightThemeOverrides"
  >
    <slot />

    <n-global-style />
  </n-config-provider>
</template>

<style scoped lang="postcss"></style>
