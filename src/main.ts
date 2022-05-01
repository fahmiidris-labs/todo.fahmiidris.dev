import './css/fonts.css';
import './css/main.css';

import { App, createApp } from 'vue';

import MyApp from './MyApp.vue';

const app: App<Element> = createApp(MyApp);

app.mount('#app');
