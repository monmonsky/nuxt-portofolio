<!-- <template>
  <div>Hello from the about page!</div>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template> -->

<template>
  <main class="prose dark:prose-invert prose-h1:text-2xl max-w-3xl mx-auto">
    <div v-if="page">
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
useHead({
  title: "About Page",
});
// definePageMeta({
//   layout: "custom",
// });

// dinamic layout
// function enableCustomLayout() {
//   setPageLayout("custom");
// }
</script>
