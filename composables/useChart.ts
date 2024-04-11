// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core'

// 引入柱状图图表，图表后缀都为 Chart
import {
  BarChart,
} from 'echarts/charts'

// 引入提示框，标题，直角坐标系，数据集，内置数据转换器组件，组件后缀都为 Component
import {
  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,
} from 'echarts/components'

// 标签自动布局、全局过渡动画等特性
import {
  LabelLayout,
  UniversalTransition,
} from 'echarts/features'

// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers'

// 系列类型的定义后缀都为 SeriesOption
import type {
  BarSeriesOption,
} from 'echarts/charts'

// 组件类型的定义后缀都为 ComponentOption
import type {
  DatasetComponentOption,
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption,
} from 'echarts/components'

import type {
  ComposeOption,
  EChartsType,
} from 'echarts/core'

import type {
  MaybeComputedElementRef,
} from '@vueuse/core'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ChartOption = ComposeOption<
  | BarSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

export interface UseChartOptions {
  //
}

echarts.use([
  BarChart,

  DatasetComponent,
  GridComponent,
  TitleComponent,
  TooltipComponent,
  TransformComponent,

  LabelLayout,
  UniversalTransition,

  CanvasRenderer,
])

export function useChart(
  target: MaybeComputedElementRef<HTMLElement | null | undefined>,
  options?: UseChartOptions | null,
  chartOption?: MaybeRef<ChartOption>,
) {
  const chartInstance = ref<EChartsType | null>(null)
  const cachedChartOption = ref<ChartOption>()

  toValue(chartOption) && (cachedChartOption.value = toValue(chartOption))

  function initChart() {
    const el = unrefElement(target)
    if (!el) {
      return
    }

    chartInstance.value = markRaw(echarts.init(el))
    return chartInstance.value
  }

  function getInstance(retry = true) {
    return chartInstance.value
      ? chartInstance.value
      : retry
        ? initChart()
        : null
  }

  function setOptions(
    chartOption = cachedChartOption,
    { cache } = { cache: true }, /* clear = true */
  ) {
    const option = toValue(chartOption)
    if (!option) {
      return
    }

    // TODO deep clone ?
    cache && (cachedChartOption.value = option)

    const instance = getInstance()
    instance?.setOption(option)
  }

  watch([target, cachedChartOption], () => {
    target && setOptions(cachedChartOption, { cache: false })
  }, { immediate: true, deep: true })

  useResizeObserver(target, () => {
    getInstance(false)?.resize()
  })

  tryOnScopeDispose(() => {
    chartInstance.value?.dispose()
    chartInstance.value = null
  })

  return {
    echarts,
    setOptions,
    getInstance,
  }
}
