<template>
    <div>callback</div>
    <textarea name="" id="" cols="200" rows="20">
        {{ JSON.stringify(params, null, 2) }}
    </textarea>
</template>

<script setup>
const route = useRoute();
const params = route.params;
</script>
