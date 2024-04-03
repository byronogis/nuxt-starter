<template>
  <naive-config
    preflight-style-disabled
  >
    <NuxtLayout>
      <NuxtLink to="/">
        index
      </NuxtLink>
      <br>
      <NuxtLink to="/about">
        about
      </NuxtLink>
      <br>
      <NuxtLink to="/example?id=1&label=foo">
        example
      </NuxtLink>
      <hr>

      <NuxtPage />
    </NuxtLayout>

    <n-global-style />
  </naive-config>
</template>
