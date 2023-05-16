<template>
    <transition name="fade-modal">
        <div v-if="show" class="modal" @click="$emit('show', false)">
            <div class="modal__content" @click.stop>
                <svg-icon class="modal__close" name="close" @click="$emit('show', false)" />

                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineEmits(['show']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});
</script>

<style lang="scss" scoped>
.modal {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &__content {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: $colorBurgundy;
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        @include mq(767) {}
    }

    &__close {
        position: absolute;
        top: 104px;
        right: 96px;
        width: 30px;
        height: 30px;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }
}

.fade-modal-enter-active,
.fade-modal-leave-active {
    transition: opacity 0.3s;
}

.fade-modal-enter-from,
.fade-modal-leave-to {
    opacity: 0;
}
</style>
