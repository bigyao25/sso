<template>
    <button @click="login">Login With Apple</button>
</template>

<script setup lang="ts">
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, OAuthProvider } from "firebase/auth";

const login = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyAM8b3WJ3fzYawZtJz3o3em82gDd0romWg",
        authDomain: "sso-test-373909.firebaseapp.com",
        // The value of `databaseURL` depends on the location of the database
        // databaseURL: "https://DATABASE_NAME.firebaseio.com",
        projectId: "sso-test-373909",
        storageBucket: "sso-test-373909.appspot.com",
        messagingSenderId: "389924773294",
        appId: "1:389924773294:web:edfeb3c293e4cb33a03c3f",
        // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
        measurementId: "G-868ZTHP15Q"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const provider = new OAuthProvider('apple.com');
    provider.addScope('email');
    provider.addScope('name');
    provider.setCustomParameters({
        // Localize the Apple authentication screen in French.
        locale: 'cn'
    });

    signInWithPopup(auth, provider)
        .then((result) => {
            // The signed-in user info.
            const user = result.user;

            // Apple credential
            const credential = OAuthProvider.credentialFromResult(result);

            if (!credential) {
                console.log('credential is null');
                return;
            }
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;

            console.log("user", user);
            console.log('accessToken', accessToken);
            console.log('idToken', idToken);
            // ...
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The credential that was used.
            const credential = OAuthProvider.credentialFromError(error);

            // ...
        });
}
</script>
