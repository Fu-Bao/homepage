import { defineConfig } from 'vite'
import htmlInlineSvg from 'vite-plugin-html-inline-svg'
import { ViteMinifyPlugin } from 'vite-plugin-minify'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                team: resolve(__dirname, 'team.html'),
            },
        },
    },
    plugins: [
        htmlInlineSvg({
            cacheDir: "./node_modules/.svg-cache",
            root: "./"
        }),
        ViteMinifyPlugin({}),
    ],
})
