<template>
    <NuxtLink class="error" to="/">Такой страницы не существует<br><br>Вернутся на главную</NuxtLink>
</template>

<style lang="scss" scoped>
.error {
    display: block;
    width: 100%;
    font-size: 32px;
    text-align: center;
    color: rgb(255, 111, 0);
    margin-top: 100px;

    &:hover {
        opacity: 0.7;
    }
}
</style>
