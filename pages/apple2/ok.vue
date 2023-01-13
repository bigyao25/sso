<template>
    <textarea name="" id="" cols="200" rows="30">{{ token }}</textarea>
</template>

<script setup>
import Cookies from 'js-cookie';

const token = ref("");

onMounted(() => {
    token.value = Cookies.get('id-token');
})
</script>
