module.exports = {
    plugins: [],
    customSyntax: "postcss-scss",
    overrides: [
        {
            files: ["**/*.vue"],
            customSyntax: "postcss-html",
        },
    ],
    rules: {},
};
