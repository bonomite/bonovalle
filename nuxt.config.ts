// https://nuxt.com/docs/api/configuration/nuxt-config
//const theme = 'bonovalle'
const theme = 'drcantamessa/viva-light/'
export default defineNuxtConfig({
    build: {
        transpile: [
            'primevue'
        ]
    },
    css: [
        'primevue-designer/src/assets/themes/drcantamessa/viva-light/drcantamessa.min.css',
        'primevue/resources/primevue.min.css',
        'primeicons/primeicons.css',
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    // besure to mirror theses imports in the vitest.config.ts
                    additionalData: `@charset "UTF-8"; @use 'sass:map'; @use 'sass:math'; @use 'sass:string'; @import url('https://fonts.googleapis.com/css2?family=Baskervville:ital@0;1&family=Open+Sans:wght@400;600&display=swap'); @import 'primevue-designer/src/assets/themes/drcantamessa/viva-light/breakpoints.scss'; @import 'primevue-designer/src/assets/custom/include-media.scss'; @import 'primevue-designer/src/assets/custom/mixins-functions.scss'; @import "~/assets/scss/global.scss";`,
                },
            },
        },
    },
    components: true,
    runtimeConfig: {
        public: {
            //BASE_URL: process.env['BASE_URL'],
        }
    },
})
