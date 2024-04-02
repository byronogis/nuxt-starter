<script setup lang="ts">
definePageMeta({
  layout: 'example',
})

</script>

<template>
  <div>
    <span>example page</span>
    <p>{{ useCounter() }}</p>
    <Example />
  </div>
</template>

<style scoped lang="postcss"></style>
