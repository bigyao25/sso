// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [["nuxt-vue3-google-signin", { clientId: "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com" }]],
  googleSignIn: { clientId: "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com" },
  runtimeConfig: {
    sso: {
      google: {
        clientSecret: "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",
        clientId: "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com",
      },
    },
  },
});
