<template>
  <main class="prose dark:prose-invert max-w-3xl mx-auto py-8 px-4">
    <div v-if="page">
      <h1 class="text-2xl font-bold mb-4">{{ page.title }}</h1>
      <p v-if="page.description" class="text-gray-600 mb-8">{{ page.description }}</p>
      <ContentRenderer :value="page" />
    </div>
    <div v-else class="empty-page">
      <h1>Page Not Found</h1>
      <p>Oops! The content you're looking for doesn't exist.</p>
      <NuxtLink to="/" class="text-blue-500 hover:underline">Go back home</NuxtLink>
    </div>
  </main>
</template>

<script setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})
</script>
