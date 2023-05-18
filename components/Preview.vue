<template>
    <section class="preview">
        <div class="container" :style="{ backgroundImage: `url('${PreviewBg}')` }">
            <a class="preview__content">
                <h1 class="preview__title">Флористика с душой</h1>

                <my-button class="preview__button" :type="'light'">смотреть работы</my-button>

                <Social lass="preview__social-list" />

                <a href="#catalog" class="preview__show-catalog">
                    смотреть каталог

                    <svg class="preview__arrow" xmlns="http://www.w3.org/2000/svg" width="14" height="21" fill="none">
                        <path stroke="#fff" d="M7 19.972 1.197 14.06M7 19.973l5.797-5.687M7 19.972 7.18 1" />
                    </svg>
                </a>

                <a href="#catalog">
                    <svg-icon class="preview__mouse-icon" name="mouse" />
                </a>

                <svg-icon class="preview__arrow-icon" name="arrow" />
            </a>
        </div>
    </section>
</template>

<script setup>
import PreviewBg from '@/assets/images/preview/preview-bg.webp';
</script>

<style lang="scss" scoped>
.preview {
    display: flex;
    height: 1044px;

    @include mq(1023) {
        height: 1024px;
    }

    @include mq(767) {
        height: 530px;
    }

    .container {
        position: relative;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        background-size: cover;

        @include mq(1023) {
            background-position: center;
            background-size: 190%;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            width: 100%;
            height: 85px;
            background: linear-gradient(0deg, #3b181e 3.33%, rgba(59, 24, 30, 0) 100%);

            @include mq(1023) {
                content: none;
            }
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

        @include mq(1023) {
            max-width: 567px;
            padding-top: 321px;
            font-size: 70px;
        }

        @include mq(767) {
            max-width: 238px;
            padding-top: 167px;
            font-size: 30px;
        }
    }

    &__show-catalog {
        position: absolute;
        bottom: 230px;
        right: -96px;
        display: flex;
        align-items: center;
        transform: rotate(90deg);

        &:hover {
            opacity: 0.7;
        }

        @include mq(1023) {
            display: none;
        }
    }

    &__arrow {
        transform: rotate(-90deg);
        margin-left: 40px;
    }

    &__button {
        margin: 80px auto 0;

        @include mq(767) {
            margin: 35px auto 0;
        }
    }

    &__mouse-icon {
        display: block;
        width: 37px;
        height: 56px;
        margin: 157px auto 0;

        &:hover {
            opacity: 0.7;
        }

        @include mq(1023) {
            display: none;
        }
    }

    &__arrow-icon {
        display: none;

        @include mq(1023) {
            display: block;
            width: 27px;
            height: 43px;
            margin: 48px auto 0;
        }

        @include mq(767) {
            width: 13px;
            height: 21px;
            margin: 32px auto 0;
        }
    }
}
</style>
