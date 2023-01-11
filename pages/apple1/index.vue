<template>
    <div>
        <button @click="login">Login with Apple</button>
    </div>
</template>

<script setup lang="ts">
const login = () => {
    window.open("/api/apple/signin");
}
</script>
