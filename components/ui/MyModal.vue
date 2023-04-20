<template>
    <transition name="fade-modal">
        <div v-if="show" class="modal" @click="$emit('show', false)">
            <div class="modal__content box-shadow" @click.stop>
                <svg
                    class="modal__close"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    @click="$emit('show', false)"
                >
                    <path
                        d="M18 6L6 18"
                        stroke="#A7A7BF"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M6 6L18 18"
                        stroke="#A7A7BF"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>

                <slot></slot>
            </div>
        </div>
    </transition>
</template>

<script setup>
defineEmits(["show"]);

defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

const scrollbarWidth = ref();

const overflow = () => {
    if (props.show === true) {
        document.querySelector("body").classList.add("is-overflow");
        document.documentElement.classList.add("is-overflow");
        document.querySelector("body").style.paddingRight =
            scrollbarWidth.value + "px";
    } else if (props.show === false) {
        setTimeout(() => {
            document.querySelector("body").classList.remove("is-overflow");
            document.documentElement.classList.remove("is-overflow");
            document.querySelector("body").style.paddingRight = 0;
        }, 400);
    }
};

// Высчитываем ширину скролла
const getScrollbarWidth = () => {
    // Creating invisible container
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.overflow = "scroll"; // forcing scrollbar to appear
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement("div");
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    scrollbarWidth.value = outer.offsetWidth - inner.offsetWidth;

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);
};

onMounted(() => {
    overflow();
    getScrollbarWidth();

    watchEffect(() => {
        getScrollbarWidth();
        overflow();
    });
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
    display: flex;
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
    background-color: rgba(26, 27, 56, 0.64);

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 704px;
        max-height: 90vh;
        padding: 64px 48px 48px;
        background-color: $colorWhite;
        transform: translate(-50%, -50%);
        overflow-y: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;

        &::-webkit-scrollbar {
            width: 0;
            height: 0;
        }

        @include mq(767) {
            width: calc(100vw - 24px);
            min-width: auto;
            max-height: 90vh;
            padding: 48px 24px 24px;
        }
    }

    &__close {
        position: absolute;
        top: 16px;
        right: 16px;
        transition: 0.45s;
        cursor: pointer;

        path {
            transition: 0.45s;
        }

        &:hover,
        &:active {
            path {
                stroke: $colorBlueDark;
            }
        }
    }
}

.fade-modal-enter-active,
.fade-modal-leave-active {
    transition: opacity 0.45s;
}

.fade-modal-enter,
.fade-modal-leave-to {
    opacity: 0;
}
</style>
