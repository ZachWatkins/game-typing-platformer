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
const jsdoc = require('eslint-plugin-jsdoc')

const MyConfig = {
    files: ['**/*.{js,mjs,cjs}', '*.js'],
    ignores: ['node_modules/', 'dist/', 'build/'],
    plugins: {
        jsdoc,
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
        indent: ['error', 4],
        quotes: ['error', 'single'],
        semi: ['error', 'never'],
        'prefer-const': 'error',
        'comma-dangle': ['error', 'always-multiline'],
    },
}

const MyTestConfig = {
    files: ['**/*.{test,spec}.{js}'],
    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },
}

module.exports = defineFlatConfig([
    {
        ignores: ['node_modules/', 'dist/', 'build/'],
    },
    MyConfig,
    MyTestConfig,
])
