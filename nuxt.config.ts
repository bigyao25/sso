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
      apple: {
        clientID: "com.ascendex.ssotest",
        teamID: "MTYL2548M3",
        keyIdentifier: "V7XAQ46P7P",
        privateKey:
          "MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQg2hdID5kXEOY3wv805xtThIfcI3pnu/mJypuN2xf1kfygCgYIKoZIzj0DAQehRANCAASlfG3lUF8fKeQfBotE1OeOQIus6YUzhg7N2jU9e0LDALHj6OzJzX2mIOmjuKSdtVblq7/xqldRH6UFTW+jyp6g",
      },
    },
  },
});
