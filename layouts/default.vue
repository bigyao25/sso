<template>
    <div>
        <nav>
            <NuxtLink to="/google">Google</NuxtLink>
            <NuxtLink to="/apple1">Apple1</NuxtLink>
            <NuxtLink to="/apple2">Apple2</NuxtLink>
            <NuxtLink to="/firebase/google">Firebase Google</NuxtLink>
            <NuxtLink to="/firebase/apple">Firebase Apple</NuxtLink>
        </nav>
        <slot />
    </div>
</template>

<style scoped lang="less">
nav {
    margin-bottom: 20px;

    a {
        margin-right: 20px;
    }
}
</style>
