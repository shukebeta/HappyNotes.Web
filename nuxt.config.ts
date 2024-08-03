// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  typescript: {
    typeCheck: true,
    strict: true
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.BASE_URL || 'http://localhost:5012'
    },
    private: {
      // Add private runtime configuration here if needed
    }
  },
  devtools: { enabled: true }
})
