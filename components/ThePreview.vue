<template>
    <section class="preview">
        <div
            class="container"
            :style="{ backgroundImage: `url('${PreviewBg}')` }"
        >
            <div class="preview__content">
                <h1 class="preview__title">Флористика с душой</h1>

                <my-button class="preview__button" :type="'light'"
                    >смотреть работы</my-button
                >

                <a href="#catalog" class="preview__show-catalog">
                    смотреть каталог

                    <svg
                        class="preview__arrow"
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="21"
                        fill="none"
                    >
                        <path
                            stroke="#fff"
                            d="M7 19.972 1.197 14.06M7 19.973l5.797-5.687M7 19.972 7.18 1"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import PreviewBg from "@/assets/image/preview/preview-bg.png";
</script>

<style lang="scss" scoped>
.preview {
    display: flex;
    height: 1044px;

    .container {
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 50% 50%;

        &::before {
            position: absolute;
            content: "";
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            height: 85px;
            background: linear-gradient(
                0deg,
                #3b181e 3.33%,
                rgba(59, 24, 30, 0) 100%
            );
        }
    }

    &__content {
        height: 100%;
    }

    &__title {
        max-width: 818px;
        padding-top: 323px;
        font-size: 120px;
        line-height: calc(120 / 132);
        font-weight: 400;
        text-align: center;
        letter-spacing: 0.09em;
        text-transform: uppercase;
        margin: 0 auto;
    }

    &__show-catalog {
        position: absolute;
        right: 0;
        bottom: 160px;
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
