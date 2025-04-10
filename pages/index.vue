<template>
  <div>Hello from the main page!</div>
</template>

<script lang="ts">
useSeoMeta({
  title: "Main Page",
  ogTitle: "Main Page",
  description: "This is main page",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Main Page",
  twitterDescription: "This is main page",
  twitterImage: "[twitter:image]",
  twitterCard: "summary_large_image",
});

useHead({
  // title: "Main Page",
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/favicon.ico",
    },
  ],
});
</script>
