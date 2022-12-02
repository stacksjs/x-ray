import { createApp } from 'vue';

import App from './app.vue';
const app = createApp(App);

import '@unocss/reset/tailwind.css'
import './plugins/unocss.ts'


import { unifiedApp } from './plugins/unified/unified-app';
app.use(unifiedApp);

app.mount('#app');
