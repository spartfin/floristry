module.exports = {
    modules: [
        '@nuxtjs/stylelint-module',
    ],
    customSyntax: "postcss-scss",
    overrides: [
        {
            files: ["**/*.vue"],
            customSyntax: "postcss-html",
        },
    ],
    rules: {}
};
