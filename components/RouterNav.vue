<script setup lang="ts">
import type { RouteRecordRaw } from 'vue-router'
import type { TreeSelectOption } from 'naive-ui'

const router = useRouter()

const routes = computed(() => router.options.routes)

const path = computed(() => router.currentRoute.value.path)
const options = computed(() => transformRoutes(routes.value))

function transformRoutes(routes: readonly RouteRecordRaw[], basePath: string = ''): TreeSelectOption[] {
  const list: TreeSelectOption[] = []

  routes.forEach((route) => {
    if (route.path !== '*') {
      const currentPath = route.path.startsWith('/') ? route.path : `/${route.path}`
      const path = `${basePath}${currentPath}`

      list.push({
        key: path,
        label: String(route.name),
        value: path,
        children: route.children ? transformRoutes(route.children, path) : [],
      })
    }
  })

  return list
}
</script>

<template>
  <n-tree-select
    class="component-router-nav"
    :value="path"
    :options

    filterable default-expand-all
    placeholder="Select Page"
    @update:value="$router.push($event)"
  />
</template>

<style scoped lang="postcss"></style>
