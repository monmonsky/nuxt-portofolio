// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  colorMode: {
    classSuffix: ''
  },
  content: {
    documentDriven: true,
    markdown: {
      anchorLinks: false
    }
  }
  // future: {
  //   compatibilityVersion: 4,
  // }
})
