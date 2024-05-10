<script setup lang="ts">
const path = ref('/api/hello/world')
const method = ref<'get' | 'post'>('get')

const { data, execute, status } = await useCustomFetch<string>(path, {
  method,
  immediate: false,
  watch: false,
  lazy: true,
  dedupe: 'cancel', // cancel | defer
  // server: false,
  // default: () => ({ message: 'no data' }),
})

const options = [
  'get',
  'post',
].map(value => ({ label: value, value }))
</script>

<template>
  <div>
    <main class="grid grid-cols-[max-content_200px] items-center gap-4">
      <span>path:</span>
      <n-input v-model:value="path" type="text" @keydown.enter="() => execute()" />

      <span>method:</span>
      <n-select v-model:value="method" :options />

      <n-button class="col-span-2" @click="() => execute()">
        Send
      </n-button>
    </main>

    <p>status: {{ status }}</p>
    <pre>{{ data }}</pre>
  </div>
</template>
