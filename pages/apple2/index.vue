<template>
    <div>
        <div id="appleid-signin"></div>
    </div>
</template>

<script setup lang="ts">
const {
    app: {
        apple: { clientID }
    },
} = useRuntimeConfig();

useHead({
    script: [
        { src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js", type: 'text/javascript' }
    ],
    meta: [
        { name: 'appleid-signin-client-id', content: clientID },
        { name: 'appleid-signin-scope', content: 'name email' },
        { name: 'appleid-signin-redirect-uri', content: 'https://yaorui.test105.ascendex-sandbox.com/api/apple/token' },
        { name: 'appleid-signin-state', content: 'yr test' },
        { name: 'appleid-signin-nonce', content: 'abc123' },
        { name: 'appleid-signin-use-popup', content: 'true' },
    ]
})
</script>
