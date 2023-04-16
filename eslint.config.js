/**
 * @file ESLint configuration file
 * @author Zachary K. Watkins
 * @description This file's configuration should mirror the `.eslintrc.js`
 * configuration. Both files are needed until the `.eslintrc.js` can be safely
 * removed.
 */
'use strict'

const { defineFlatConfig } = require('eslint-define-config')
const globals = require('globals')
const js = require('@eslint/js')
const jsonc = require('eslint-plugin-jsonc')
const jsdoc = require('eslint-plugin-jsdoc')
const ignored = ['node_modules/', 'dist/', 'build/', 'public/', 'includes/']

const MyConfig = {
    files: ['**/*.{js,mjs,cjs}', '*.js'],
    ignores,
    plugins: {
        jsdoc,
        jsonc,
    },
    languageOptions: {
        parserOptions: {
            sourceType: 'module',
            ecmaVersion: 2018,
        },
        globals: {
            ...globals.serviceworker,
            ...globals.browser,
            ...globals.node,
            ...globals.es2018,
            ...globals.commonjs,
        },
    },
    rules: {
        ...js.configs.recommended.rules,
        ...jsdoc.configs.recommended.rules,
        ...jsonc.configs['recommended-with-jsonc'].rules,
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prefer-const': 'error',
        'comma-dangle': ['error', 'always-multiline'],
    },
}

const MyTestConfig = {
    files: ['**/*.{test,spec}.{js,ts}'],
    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },
}

module.exports = defineFlatConfig([
    {ignores},
    MyConfig,
    MyTestConfig,
])
