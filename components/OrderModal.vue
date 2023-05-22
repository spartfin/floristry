<template>
    <div v-if="show" class="order" @click="$emit('show', false)">
        <div class="order__content" @click.stop>
            <svg-icon class="order__close" name="close" @click="$emit('show', false)" />

            <nuxt-img class="order__image" src="/images/order/order.webp" />

            <div class="order__wrap">
                <h3 class="order__title">Оставьте свой<br>номер и мы вам перезвоним!</h3>

                <MyInput class="order__input-name" :type="'text'" :placeholder="'Имя'" required />

                <MyInput :placeholder="'Телефон'" :type="'number'" required />

                <my-button class="order__button" :type="'white'">ПОЗВОНИТЕ МНЕ</my-button>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['show']);

const props = defineProps({
    show: {
        type: Boolean,
        default: false,
    },
});

// Высчитываем ширину скролла
const getScrollbarWidth = () => {
    // Creating invisible container
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll'; // forcing scrollbar to appear
    outer.style.msOverflowStyle = 'scrollbar'; // needed for WinJS apps
    document.body.appendChild(outer);

    // Creating inner element and placing it in the container
    const inner = document.createElement('div');
    outer.appendChild(inner);

    // Calculating difference between container's full width and the child width
    const scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);

    // Removing temporary elements from the DOM
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
};

onMounted(() => {
    watchEffect(() => {
        if (props.show) {
            document.body.style.paddingRight = getScrollbarWidth() + 'px';
            document.body.classList.add('is-overflow');
        } else {
            document.body.style.paddingRight = 0;
            document.body.classList.remove('is-overflow');
        }

        // Закрываем попап по нажатию на клавишу ESC
        window.addEventListener('keydown', e => {
            const KEY_ESC = 27;

            if (e.keyCode === KEY_ESC) {
                emit('show', false);
                document.body.style.paddingRight = 0;
                document.body.classList.remove('is-overflow');
            }
        });
    });
});
</script>

<style lang="scss">
.order {
    position: fixed;
    z-index: 999;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.6);
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    &__content {
        position: absolute;
        top: 50%;
        left: 50%;
        display: flex;
        width: 716px;
        height: 444px;
        background-color: $colorBurgundy;
        transform: translate(-50%, -50%);

        @include mq(1023) {
            top: 8vh;
            width: 464px;
            height: 640px;
            transform: translate(-50%, 0);
        }

        @include mq(1023) {
            top: 50%;
            width: 288px;
            height: 426px;
            transform: translate(-50%, -50%);
        }
    }

    &__close {
        position: absolute;
        top: 24px;
        right: 24px;
        width: 22px;
        height: 22px;
        transition: 0.3s;
        cursor: pointer;

        @include mq(1023) {
            top: 40px;
            right: 40px;
        }

        @include mq(767) {
            top: 20px;
            right: 20px;
        }

        &:hover {
            opacity: 0.7;
        }
    }

    &__image {
        width: 335px;

        @include mq(1023) {
            display: none;
        }
    }

    &__wrap {
        display: flex;
        flex-direction: column;
        padding: 66px;

        @include mq(1023) {
            padding: 104px 41px 78px;
        }

        @include mq(767) {
            padding: 62px 20px 52px;
        }
    }

    &__title {
        font-size: 20px;
        line-height: calc(32 / 20);
        font-weight: 400;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 26px;

        @include mq(1023) {
            font-size: 30px;
            margin-bottom: 56px;
        }

        @include mq(767) {
            font-size: 20px;
            margin-bottom: 26px;
        }
    }

    &__input-name {
        margin-bottom: 16px;

        @include mq(1023) {
            margin-bottom: 24px;;
        }

        @include mq(767) {
            margin-bottom: 16px;;
        }
    }

    &__button {
        width: 100% !important;
        margin-top: auto;
    }
}
</style>
