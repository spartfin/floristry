<template>
    <section class="header">
        <div class="container">
            <div class="header__content">
                <nuxt-link class="header__link" to="/">
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
            <Social lass="header__social" />
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
    &__content {
        display: flex;
        justify-content: space-between;
        padding-top: 80px;
    }

    &__logo {
        width: 137px;
        height: 47px;

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
    }

    &__line {
        width: 23px;
        height: 2px;

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
    }

    .social__list {
        position: absolute;
        bottom: 96px;
        left: 96px;
    }
}
</style>
