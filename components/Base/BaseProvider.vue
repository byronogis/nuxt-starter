<script setup lang="ts">

</script>

<template>
  <BaseConfigProvider>
    <NMessageProvider>
      <NNotificationProvider>
        <NLoadingBarProvider>
          <NDialogProvider>
            <NModalProvider>
              <slot />
            </NModalProvider>
          </NDialogProvider>
        </NLoadingBarProvider>
      </NNotificationProvider>
    </NMessageProvider>
  </BaseConfigProvider>
</template>

<style scoped lang="postcss"></style>
