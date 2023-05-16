<template>
    <div class="default">
        <Header class="default__header" />
        <slot />
    </div>
</template>

<style lang="scss" scoped>
.default {
    position: relative;

    &__header {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
    }
}
</style>
