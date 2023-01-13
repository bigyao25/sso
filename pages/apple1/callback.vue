<template>
    <div>callback</div>
    <textarea cols="200" rows="20">{{ JSON.stringify(token, null, 2) }}</textarea>
</template>

<script setup>
import appleSignin from "apple-signin-auth";

const {
    app: {
        apple: { clientID }
    },
    sso: {
        apple: {
            teamID,
            keyIdentifier,
            privateKey,
        },
    },
} = useRuntimeConfig();

const options = {
    clientID,
    teamID,
    keyIdentifier,
    privateKey,
};
const clientSecret = appleSignin.getClientSecret(options);
console.log("clientSecret", clientSecret);

const body = await readBody < CallbackRsp > (event);
console.log("code", body.code);
//   return { code: body.code, secret: clientSecret };

const token = await appleSignin.getAuthorizationToken(body.code, {
    clientID,
    clientSecret,
    // redirectUri: "https://yaorui.test105.ascendex-sandbox.com/api/apple/token",
    redirectUri: "",
});

</script>
