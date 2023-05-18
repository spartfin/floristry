<template>
    <section class="header">
        <div class="container">
            <div class="header__content">
                <nuxt-link class="header__link" to="/" aria-label="На главную">
                    <svg-icon class="header__logo" name="logo" />
                </nuxt-link>

                <div class="header__menu" @click="active = true">
                    <span class="header__lines">
                        <svg-icon class="header__line" name="line" />

                        <svg-icon class="header__line" name="line" />
                    </span>

                    <span class="header__text">Меню</span>
                </div>
            </div>
        </div>

        <my-modal class="header__modal" :show="active" @show="close">
            <div class="header__modal-content">
                <svg-icon class="header__modal-logo" name="logo" />

                <ul class="header__modal-list">
                    <li class="header__modal-item">
                        <nuxt-link class="header__modal-link" to="/wedding-decoration">свадебная<br>флористика</nuxt-link>
                    </li>

                    <li class="header__modal-item">
                        <nuxt-link class="header__modal-link" to="/bouquets-for-celebrations">букеты на любые<br>мероприятия</nuxt-link>
                    </li>

                    <li class="header__modal-item">
                        <nuxt-link class="header__modal-link" to="/compositions">композиции</nuxt-link>
                    </li>

                    <li class="header__modal-item">
                        <nuxt-link class="header__modal-link" to="/event-design">оформление<br>мероприятий</nuxt-link>
                    </li>
                </ul>
            </div>

            <Social />
        </my-modal>
    </section>
</template>

<script lang="ts" setup>
const active = ref(false);
const close = (data: boolean) => {
    active.value = data;
};
</script>

<style lang="scss">
.header {
    @include mq(767) {
        background-color: $colorBurgundy;
    }

    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-top: 80px;

        @include mq(1023) {
            padding-top: 38px;
        }

        @include mq(767) {
            padding: 15px 14px 20px;
        }
    }

    &__logo {
        width: 137px;
        height: 47px;

        @include mq(767) {
            width: 96px;
            height: 29px;
        }

        &:hover {
            opacity: 0.7;
        }
    }

    &__menu {
        display: flex;
        align-items: center;
        height: max-content;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
            opacity: 0.7;
        }
    }

    &__lines {
        display: flex;
        flex-direction: column;
        margin-right: 15px;

        @include mq(1023) {
            margin-right: 0;
        }
    }

    &__line {
        width: 23px;
        height: 2px;

        @include mq(1023) {
            width: 35px;
        }

        @include mq(767) {
            width: 37px;
        }

        &:first-child {
            margin-bottom: 6px;
        }
    }

    &__text {
        font-size: 20px;
        line-height: calc(22 / 20);
        font-weight: 400;
        letter-spacing: 0.06em;
        text-transform: uppercase;

        @include mq(1023) {
            display: none;
        }
    }

    &__modal-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 96px;

        @include mq(1023) {
            margin-top: 112px;
        }

        @include mq(767) {
            margin-top: 25px;
        }
    }

    &__modal-logo {
        width: 158px;
        height: 49px;
        margin-bottom: 200px;

        @include mq(1023) {
            width: 137px;
            height: 47px;
            margin-bottom: 148px;
        }

        @include mq(767) {
            width: 96px;
            height: 29px;
            margin-bottom: 74px;
        }
    }

    &__modal-list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    &__modal-item {
        display: flex;
        margin-bottom: 72px;

        @include mq(1023) {
            margin-bottom: 56px;
        }

        @include mq(767) {
            margin-bottom: 48px;
        }
    }

    &__modal-link {
        font-size: 35px;
        line-height: calc(39 / 35);
        letter-spacing: 0.09em;
        text-transform: uppercase;
        text-align: center;
        color: rgba(255, 255, 255, 0.5);

        @include mq(1023) {
            font-size: 30px;
        }

        @include mq(767) {
            font-size: 15px;
        }

        &:hover {
            transform: scale(1.2);
        }
    }

    .social__list {
        position: absolute;
        bottom: 96px;
        left: 96px;

        @include mq(1023) {
            display: none;
        }
    }
}
</style>
