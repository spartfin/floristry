<template>
    <button @click="handleError">Вернуться на главную</button>
</template>

<script lang="ts" setup>
const props = defineProps({
    error: {
        type: Object,
        default: () => {},
    },
});

const handleError = () => clearError({ redirect: "/" });
</script>
