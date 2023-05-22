// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/scss/main.scss'],

    app: {
        head: {
            htmlAttrs: {
                lang: 'ru',
            },
            meta: [
                { charset: 'utf-8' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { hid: 'description', name: 'description', content: 'Floristy project' },
            ],
        },
    },

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @use "sass:math";
                        @import "@/assets/scss/_mixins.scss";
                        @import "@/assets/scss/_variables.scss";
                    `,
                },
            },
        },
    },

    modules: [
        '@nuxtjs/stylelint-module',
        '@nuxtjs/eslint-module',
        '@nuxtjs/svg-sprite',
        '@nuxt/image-edge',
    ],

    components: [
        {
            path: '~/components',
            pathPrefix: false,
        },
    ],
});
