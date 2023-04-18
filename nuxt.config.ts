// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/scss/main.scss"],

    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `
                        @import "@/assets/scss/_mixins.scss";
                        @import "@/assets/scss/_variables.scss";
                    `,
                },
            },
        },
    },
    modules: ["@nuxtjs/stylelint-module"],
});
