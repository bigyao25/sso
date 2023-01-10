<template>
    <div style="background-color:lightblue;">
        <button @click="login">Login with Apple</button>
    </div>
</template>

<script setup>

const login = () => {
    window.location = "/api/apple/login";
}
</script>
