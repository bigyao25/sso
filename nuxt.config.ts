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
        public: {
          clientID: "com.ascendex.ssotest",
        },
        teamID: "MTYL2548M3",
        keyIdentifier: "ZT43834TJ7",
        privateKey: `-----BEGIN PRIVATE KEY-----
MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgJfQywmsBJt0TCmff
R9pb+iW0ghv0au2XvBOpA3IHWUqgCgYIKoZIzj0DAQehRANCAASe2ac4eBp7njEC
GD9/ud/Yvza10FKqZGoKqniwqVRSA0CgyFsQCfQqnObHPo9JRLlXoZ1tjqhhhIuE
pb+CANbl
-----END PRIVATE KEY-----`,
      },
    },
  },
});
