import eslint from 'vite-plugin-eslint'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslint(),
        nodePolyfills({
            global: true,
        }),
    ],
    define: {
        'process.env': {},
    },
})
