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
    }

    &__item {
        margin-bottom: 24px;
    }

    &__icon {
        width: 27px;
        height: 27px;

        &:hover {
            opacity: 0.5;
        }
    }
}
</style>
