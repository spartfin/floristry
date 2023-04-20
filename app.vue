<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
const title = ref("Floristry");
const description = ref("Сайт Floristry на Nuxt3, код Горынь Алексей");

useSeoMeta({
    title,
    description,
});
</script>
