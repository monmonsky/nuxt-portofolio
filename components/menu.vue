<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink to="/" class="link">Main</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/projects" class="link">Project</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/blog" class="link">Blog</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 hover:dark:bg-gray-800 text-2xl md:text-base
}
</style>
