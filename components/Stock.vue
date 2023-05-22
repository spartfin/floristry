<template>
    <section class="stock">
        <div class="container">
            <div class="stock__content">
                <div class="stock__wrap">
                    <h3 class="stock__title">акционные предложения</h3>

                    <p class="stock__text">При заказе свадебного оформления предоставляется скидка на букет невесты и бутоньерку в размере 30%</p>

                    <my-button class="stock__button" :type="'dark'" @click="active = true">заказать оформление</my-button>
                </div>

                <nuxt-img class="stock__image" src="/images/stock/stock.webp" />
            </div>
        </div>

        <OrderModal :show="active" @show="activeShow" />
    </section>
</template>

<script setup>
const active = ref(false);
const activeShow = data => active.value = data;
</script>

<style lang="scss">
.stock {
    padding: 70px 0 170px;

    @include mq(1023) {
        padding: 0 0 100px;
    }

    &__content {
        display: flex;
        justify-content: center;

        @include mq(1023) {
            flex-direction: column-reverse;
            align-items: center;
        }
    }

    &__wrap {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 352px;
        margin-right: 164px;

        @include mq(1023) {
            width: 453px;
            margin-right: 0;
        }

        @include mq(767) {
            width: 100%;
        }
    }

    &__title {
        position: relative;
        font-size: 30px;
        line-height: calc(51 / 30);
        font-weight: 400;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        margin-bottom: 40px;

        @include mq(1023) {
            text-align: center;
            margin-bottom: 55px;
        }

        @include mq(767) {
            font-size: 20px;
            text-align: start;
            margin-bottom: 40px;
        }

        &::before {
            content: '';
            position: absolute;
            bottom: -13px;
            left: 0;
            width: 86px;
            height: 2px;
            background-color: $colorWhite;

            @include mq(1023) {
                left: 50%;
                transform: translateX(-50%);
            }

            @include mq(767) {
                left: 0;
                transform: translateX(0);
            }
        }
    }

    &__text {
        font-size: 14px;
        line-height: calc(24 / 14);
        margin-bottom: 45px;

        @include mq(1023) {
            text-align: center;
            margin-bottom: 15px;
        }

        @include mq(767) {
            text-align: start;
            margin-bottom: 40px;
        }
    }

    &__image {
        width: percentage(math.div(697, 1728));

        @include mq(1023) {
            width: percentage(math.div(453, 768));
            margin-bottom: 30px;
        }

        @include mq(767) {
            width: 100%;
            margin-bottom: 25px;
        }
    }

    &__button {
        @include mq(1023) {
            margin: 0 auto;
        }

        @include mq(767) {
            margin: 0;
        }
    }
}
</style>
