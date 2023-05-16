<template>
    <section class="preview">
        <div class="container" :style="{ backgroundImage: `url('${PreviewBg}')` }">
            <div class="preview__content">
                <h1 class="preview__title">Флористика с душой</h1>

                <my-button class="preview__button" :type="'light'">смотреть работы</my-button>

                <Social lass="preview__social-list" />

                <a href="#catalog" class="preview__show-catalog">
                    смотреть каталог

                    <svg class="preview__arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="21" fill="none">
                        <path stroke="#fff" d="M7 19.972 1.197 14.06M7 19.973l5.797-5.687M7 19.972 7.18 1" />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import PreviewBg from '@/assets/image/preview/preview-bg.png';
</script>

<style lang="scss" scoped>
.preview {
    display: flex;
    height: 1044px;

    .container {
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;

        &::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 85px;
            background: linear-gradient(0deg, #3b181e 3.33%, rgba(59, 24, 30, 0) 100%);
        }
    }

    &__content {
        position: relative;
        height: 100%;
    }

    &__title {
        max-width: 818px;
        padding-top: 323px;
        font-size: 120px;
        line-height: calc(120 / 132);
        font-weight: 400;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        text-align: center;
        margin: 0 auto;
    }

    &__show-catalog {
        position: absolute;
        bottom: 230px;
        right: -96px;
        display: flex;
        align-items: center;
        transform: rotate(90deg);
    }

    &__arrow {
        transform: rotate(-90deg);
        margin-left: 40px;
    }

    &__button {
        margin: 80px auto 0;
    }
}
</style>
