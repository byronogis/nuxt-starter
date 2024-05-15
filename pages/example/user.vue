<script setup lang="ts">
const user = useUserStore()
</script>

<template>
  <NSpace vertical>
    <NText>{{ user.username }}</NText>
    <NInput :value="user.username" @update:value="user.updateUsername" />
  </NSpace>
</template>

<style scoped lang="postcss"></style>
