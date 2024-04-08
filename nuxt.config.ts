// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},

    app: {
        head: {
            htmlAttrs: {
                lang: "en"
            },
        }
    },

    srcDir: "src",

    components: [
        "~/components",
    ],

    css: ["~/assets/css/main.css"],

    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss/nesting': {},
            tailwindcss: {},
            autoprefixer: {}
        }
    },


    devServer: {
        host: "0.0.0.0",
        port: 3004
    }
})
