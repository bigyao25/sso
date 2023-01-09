<template>
    <div>
        <!-- <button @click="handle">Login by Google</button>
        <div id="btnGoogle">GGG</div> -->
        <!-- <GoogleLoginButton :google-login-button-props="googleLoginButtonProps"></GoogleLoginButton> -->
        <button :disabled="!isReady" @click="() => login()">Login with Google</button>
    </div>
    <NuxtLink to="/dashboard">Dashboard</NuxtLink>
</template>

<script setup lang="ts">
import {
    useCodeClient,
    type ImplicitFlowSuccessResponse,
    type ImplicitFlowErrorResponse,
} from "vue3-google-signin";

const handleOnSuccess = async (response: ImplicitFlowSuccessResponse) => {
    // send code to a backend server to verify it.
    console.log("handleOnSuccess:Code: ", response.code);

    // use axios or something to reach backend server
    const res = await fetch("/api/callback", {
        method: "POST",
        body: JSON.stringify({
            code: response.code,
        }),
    });

    console.log('handleOnSuccess:res', res);

};

const handleOnError = (errorResponse: ImplicitFlowErrorResponse) => {
    console.log("handleOnSuccess:Error: ", errorResponse);
};

const { isReady, login } = useCodeClient({
    onSuccess: handleOnSuccess,
    onError: handleOnError,
    // other options
});

// const CLIENT_ID = "389924773294-s7t01ql7g2jhd83lbo80d6t6inqfn1e1.apps.googleusercontent.com";

// useHead({
//     script: [{ src: 'https://accounts.google.com/gsi/client', async: true, defer: true }]
// });

// window.onload = function () {
//     google.accounts.id.initialize({
//         client_id: CLIENT_ID,
//         callback: handleCredentialResponse
//     });
//     google.accounts.id.prompt();

//     const btn = 
//     google.accounts.id.renderButton()
// };
// const googleLoginButtonProps = computed(
//     (): GoogleLoginButtonProps => ({
//         clientId: config.NUXT_ENV_GOOGLE_CLIENT_ID,
//         onCredentialResponse: handleCredentialResponse,
//     })
// );

// const googleLoginButtonProps = computed(() => ({
//     clientId: CLIENT_ID,
//     onCredentialResponse: (res: any) => {
//         console.log(123, res);
//     }
// }));

</script>
