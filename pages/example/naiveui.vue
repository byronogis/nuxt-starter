<script setup lang="ts">
const appConfig = useAppConfig()

function log() {
  console.log(appConfig)
}
</script>

<template>
  <div>
    <n-space>
      <n-button @click="log">
        Default
      </n-button>
      <n-button type="tertiary">
        Tertiary
      </n-button>
      <n-button type="primary">
        Primary
      </n-button>
      <n-button type="info">
        Info
      </n-button>
      <n-button type="success">
        Success
      </n-button>
      <n-button type="warning">
        Warning
      </n-button>
      <n-button type="error">
        Error
      </n-button>
    </n-space>

    <n-card>
      <n-space>
        <n-button @click="$colorMode.preference = 'dark'">
          深色
        </n-button>
        <n-button @click="$colorMode.preference = 'light'">
          浅色
        </n-button>
        <n-button @click="$colorMode.preference = 'system'">
          系统
        </n-button>
      </n-space>
    </n-card>
  </div>
</template>

<style scoped lang="postcss"></style>
