<template>
    <span
        class="button"
        :class="`button__${type}`"
        @click="$emit('click', $event)"
    >
        <slot />
    </span>
</template>

<script setup>
defineEmits(["click"]);

defineProps({
    type: {
        type: String,
        default: "default",
    },
});
</script>

<style lang="scss" scoped>
.button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    padding: 19px 30px 17px;
    font-size: 12px;
    line-height: calc(12 / 13);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: $colorWhite;
    border: 1px solid $colorWhite;
    transition: 0.3s;
    cursor: pointer;

    @include mq(1023) {
        padding: 22px 40px 21px;
        font-size: 15px;
    }

    @include mq(767) {
        padding: 16px 30px 14px;
        font-size: 10px;
    }

    &:hover,
    &:active {
        color: $colorBlack;
        background-color: $colorWhite;
    }

    &__default {
        background-color: transparent;
    }

    &__light {
        background-color: $colorDark;
    }

    &__dark {
        border: 1px solid transparent;
        background-color: $colorBlack;
    }
}
</style>
