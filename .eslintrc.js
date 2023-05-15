module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true,
    },
    parserOptions: {
        parser: '@babel/eslint-parser',
        sourceType: 'module',
        requireConfigFile: false,
    },
    extends: [
        '@nuxtjs/eslint-config',
    ],
    rules: {
        'vue/multi-word-component-names': 'off',
        'linebreak-style': ['off', 'windows'],
        indent: ['error', 4],
        'no-new': 'off',
        'max-len': 'off',
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: false,
        }],
        'prefer-template': 'off',

        'vue/html-indent': ['error', 4],
        'vue/singleline-html-element-content-newline': ['off'],
        'vue/html-self-closing': ['off'],
        'vue/no-v-html': ['off'],
        'no-unused-vars': ['off'],
        'no-undef': ['off'],
        'vue/max-attributes-per-line': ['off'],
        'no-param-reassign': ['error', { props: false }],
        'import/no-extraneous-dependencies': ['off'],
        semi: ['error', 'always'],
        'comma-dangle': ['error', 'always-multiline'],
        'object-curly-spacing': ['error', 'always'],
        'space-before-function-paren': ['error', 'never'],
        camelcase: ['off'],
        'no-console': ['off'],
        eqeqeq: ['off'],
        'no-return-assign': ['off'],
    },
};
