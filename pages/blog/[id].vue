<template>
  <div>We are inside blog</div>
  <div>Post ID: {{ route.params.id }}</div>
</template>

<script setup>
const route = useRoute();
</script>
