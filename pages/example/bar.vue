<script setup lang="ts">
import { NInputNumber } from '#components'

interface DataItem {
  product: string
  2015: number
  2016: number
  2017: number
}

const keys = ['product', '2015', '2016', '2017'] as const

const data = ref<DataItem[]>([
  { product: 'Matcha Latte', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
  { product: 'Milk Tea', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
  { product: 'Cheese Cocoa', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
  { product: 'Walnut Brownie', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
])

const columns = ref(keys.map(key => ({
  title: key,
  key,
  render(row: DataItem, index: number) {
    return key === 'product'
      ? row[key]
      : h(NInputNumber, {
        step: 10,
        value: row[key],
        onUpdateValue(v) {
          data.value[index][key] = Number(v)
        },
      })
  },
})))

const options = computed<ChartOption>(() => ({
  tooltip: {},
  dataset: {
    // 用 dimensions 指定了维度的顺序。直角坐标系中，如果 X 轴 type 为 category，
    // 默认把第一个维度映射到 X 轴上，后面维度映射到 Y 轴上。
    // 如果不指定 dimensions，也可以通过指定 series.encode
    // 完成映射，参见后文。
    dimensions: ['product', '2015', '2016', '2017'],
    source: data.value,
  },
  xAxis: { type: 'category' },
  yAxis: {},
  series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }],
}))

function addDataItem() {
  data.value.push({
    product: `New Item ${data.value.length}`,
    2015: 0,
    2016: 0,
    2017: 0,
  })
}
</script>

<template>
  <div>
    <ChartBar :options class="aspect-[16/9] max-w-750px" />

    <NSpace vertical>
      <NButton @click="addDataItem">
        Add Item
      </NButton>
      <NDataTable
        :columns
        :data
        :bordered="false"
      />
    </NSpace>
  </div>
</template>

<style scoped lang="postcss"></style>
