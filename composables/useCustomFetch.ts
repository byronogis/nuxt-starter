/**
 * Factory function to create useFetch and useAsyncData with defaults (waiting)
 * @see https://github.com/nuxt/nuxt/issues/14736
 */

import type { UseFetchOptions } from 'nuxt/app'

export function useCustomFetch<T>(
  url: MaybeRefOrGetter<string>,
  options: UseFetchOptions<T> = {},
) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$customFetch,
  })
}
