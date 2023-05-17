<template>
    <ul class="social__list">
        <li class="social__item">
            <a class="social__link" href="https://www.instagram.com/spartfin" target="_blank">
                <svg-icon class="social__icon" name="insta" />
            </a>
        </li>

        <li class="social__item">
            <a class="social-link" href="https://www.facebook.com/spartfin" target="_blank">
                <svg-icon class="social__icon" name="fb" />
            </a>
        </li>

        <li class="social__item">
            <a class="social__link" href="https://wa.me/79264066145" target="_blank">
                <svg-icon class="social__icon" name="whatsapp" />
            </a>
        </li>

        <li class="social__item">
            <a class="social__link" href="https://vk.com/spartfin" target="_blank">
                <svg-icon class="social__icon" name="vk" />
            </a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.social {
    &__list {
        position: absolute;
        bottom: 114px;
        left: 0;
        display: flex;
        flex-direction: column;
        width: max-content;

        @include mq(1023) {
            position: static;
            flex-direction: row;
            margin: 211px auto 42px;
        }

        @include mq(767) {
            position: static;
            flex-direction: row;
            margin: 70px auto 32px;
        }
    }

    &__item {
        margin-bottom: 24px;

        @include mq(1023) {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            background-color: $colorBurgundy;
            margin: 0 80px 0 0;

            @include mq(767) {
                width: 35px;
                height: 35px;
                margin: 0 40px 0 0;
            }

            &:last-child {
                margin: 0;
            }
        }
    }

    &__icon {
        display: block;
        width: 27px;
        height: 27px;

        @include mq(767) {
            width: 18px;
            height: 18px;
        }

        &:hover {
            opacity: 0.5;
        }
    }
}
</style>
