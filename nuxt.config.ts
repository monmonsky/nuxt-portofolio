// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {
    enabled: true,
    vscode: {
      enabled: true,
      runtimePath: '/usr/local/bin/code'
    }
  },
  modules : [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  }
  // future: {
  //   compatibilityVersion: 4,
  // }
})
