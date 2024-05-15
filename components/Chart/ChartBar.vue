<script setup lang="ts">
const props = defineProps<{
  options: ChartOption
}>()

const chartRef = ref<HTMLElement>()

const options = computed(() => ({
  //
  ...props.options,
}))

useChart(chartRef, { chartOption: options })
// or
// const chart = useChart(chartRef)
// chart.setOptions(options)
</script>

<template>
  <div ref="chartRef" class="component-chart" />
</template>

<style scoped lang="postcss"></style>
