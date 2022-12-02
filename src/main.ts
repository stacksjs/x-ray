import 'highlight.js/styles/atom-one-light.css'

import hljsVuePlugin from '@highlightjs/vue-plugin'

import { createApp } from 'vue'

import App from './app.vue'

import '@unocss/reset/tailwind.css'

// import { unifiedApp } from './plugins/unified/unified-app'
const app = createApp(App)
app.use(hljsVuePlugin)

app.mount('#app')
