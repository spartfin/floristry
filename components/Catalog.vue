<template>
    <section id="catalog" class="catalog">
        <div class="container">
            <div class="catalog__content">
                <h2 class="catalog__title">Каталог услуг</h2>

                <carousel v-if="data.catalog.services" class="catalog__carousel" v-bind="settings" :breakpoints="breakpoints">
                    <slide v-for="(slide, index) in data.catalog.services" :key="index" class="catalog__slide">
                        <nuxt-link class="catalog__slide-content" :to="slide.link" :style="{ backgroundImage: `url('/images/catalog/${slide.id}.png')` }">
                            <span class="catalog__slide-number">{{ slide.id }}</span>

                            <span class="catalog__slide-name">{{ slide.name }}</span>

                            <my-button class="catalog__slide-button" :type="'white'">смотреть работы</my-button>
                        </nuxt-link>
                    </slide>

                    <template #addons>
                        <Pagination class="catalog__slide-pagination" />
                        <Navigation class="catalog__slide-navigation" />
                    </template>
                </carousel>
            </div>
        </div>
    </section>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

const { data } = await useFetch('/api/catalog');

const settings = {
    itemsToShow: 1,
    mouseDrag: false,
    wrapAround: true,
};

const breakpoints = {
    768: {
        itemsToShow: 2,
    },
    1200: {
        itemsToShow: 3,
    },
    1600: {
        itemsToShow: 4,
        wrapAround: false,
    },
};
</script>

<style lang="scss">
.catalog {
    position: relative;

    &::before {
        content: 'каталог услуг';
        position: absolute;
        top: 188px;
        left: 50%;
        font-size: 220px;
        line-height: calc(243 / 220);
        font-weight: 400;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        white-space: nowrap;
        opacity: 0.03;
        transform: translateX(-50%);

        @include mq(1680) {
            top: 200px;
            font-size: 160px;
        }

        @include mq(1200) {
            top: 210px;
            font-size: 120px;
        }

        @include mq(1023) {
            content: none;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 100px 0;
    }

    &__title {
        position: relative;
        font-size: 30px;
        line-height: calc(33 / 30);
        font-weight: 400;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 120px;

        @include mq(1023) {
            margin-bottom: 52px;
        }

        @include mq(767) {
            display: block;
            width: 100%;
            font-size: 20px;
            margin-bottom: 20px;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: -22px;
            left: 50%;
            width: 86px;
            height: 2px;
            background-color: $colorWhite;
            transform: translateX(-50%);

            @include mq(767) {
                content: none;
            }
        }
    }

    &__carousel {
        width: 100%;
    }

    &__slide {
        padding: 0 30px;

        @include mq(1440) {
            padding: 0 10px;
        }

        @include mq(767) {
            padding: 0;
        }
    }

    &__slide-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        height: 450px;
        padding: 36px 20px 15px;
        background-repeat: no-repeat;
        background-position: center;
        background-size: 100%;
        cursor: pointer;

        @include mq(767) {
            height: 392px;
            padding: 23px 20px 15px;
        }

        &:hover {
            .catalog__slide-button {
                display: flex !important;

                @include mq(1023) {
                    display: none !important;
                }
            }
        }
    }

    &__slide-number {
        position: relative;
        font-size: 20px;
        line-height: calc(22 / 20);
        text-transform: uppercase;

        &::after {
            content: '';
            position: absolute;
            bottom: 5px;
            right: -82px;
            width: 70px;
            height: 1px;
            background-color: $colorWhite;
        }
    }

    &__slide-name {
        font-size: 16px;
        line-height: calc(27 / 16);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: start;
        margin-top: auto;
    }

    &__slide-button {
        display: none !important;
        margin: 20px 0 15px;
    }

    &__slide-pagination {
        display: none;

        @include mq(1023) {
            display: flex;
            margin: 30px 0 0;
        }

        @include mq(767) {
            display: flex;
            margin: 20px 0 0;
        }
    }

    &__slide-navigation {
        display: none;

        @include mq(1600) {
            display: flex;
        }

        @include mq(1023) {
            display: none;
        }
    }

    .carousel__next {
        right: -50px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: $colorWhite;
        transition: 0.3s;

        &:hover {
            opacity: 0.7;
        }
    }

    .carousel__prev {
        left: -50px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: $colorWhite;
        transition: 0.3s;

        &:hover {
            opacity: 0.7;
        }
    }

    .carousel__pagination-item {
        width: 63px;
        margin-right: 12px;

        @include mq(767) {
            width: 100%;
        }

        &:last-child {
            margin-right: 0;
        }
    }

    .carousel__pagination-button {
        width: 100%;
        height: 3px;
        border-radius: 50px;
        background: rgba(255, 255, 255, 0.3);

        &--active {
            background: $colorWhite;
        }

        &::after {
            content: none;
        }
    }
}
</style>
