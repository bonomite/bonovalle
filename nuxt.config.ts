// https://nuxt.com/docs/api/configuration/nuxt-config
const theme = 'bonovalle'
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            title: 'BonoValle',

            link: [
                { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
                { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
                { rel: 'apple-touch-icon', sizes: "180x180", href: '/apple-touch-icon.png' },
                { rel: 'manifest', href: '/site.webmanifest' },
                { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#ff3904' },
            ],
            meta: [
                { name: 'msapplication-TileColor', content: '#da532c' },
                { name: 'theme-color', content: '#ffffff' },
            ]
        },

    },
    modules: ['@nuxtjs/supabase'],
    build: {
        transpile: [
            'primevue'
        ]
    },
    css: [
        `primevue-designer/src/assets/themes/${theme}/${theme}.min.css`,
        'primevue/resources/primevue.min.css',
        'primeicons/primeicons.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // besure to mirror theses imports in the vitest.config.ts
                    additionalData: `@charset "UTF-8"; @use 'sass:map'; @use 'sass:math'; @use 'sass:string'; @import url('https://fonts.googleapis.com/css2?family=Exo+2&family=Kdam+Thmor+Pro&display=swap'); @import 'primevue-designer/src/assets/themes/${theme}/breakpoints.scss'; @import 'primevue-designer/src/assets/custom/include-media.scss'; @import 'primevue-designer/src/assets/custom/mixins-functions.scss'; @import "~/assets/scss/global.scss";`,
                },
            },
        },
    },
    components: true,
    runtimeConfig: {
        public: {
            //BASE_URL: process.env['BASE_URL'],
            SUPABASE_URL: process.env['SUPABASE_URL'],
            SUPABASE_key: process.env['SUPABASE_KEY'],
        }
    },
})
