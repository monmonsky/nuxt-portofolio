// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  colorMode: {
    classSuffix: ''
  },
  content: {
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml'],
    }
  }
  // future: {
  //   compatibilityVersion: 4,
  // }
})
