import './main.scss';

import { createApp } from 'vue';
import Axios from 'axios';
import { createPinia } from 'pinia';
import Router from '../router.js';
import { createApi } from '../plugins/api.js';
import { createI18n } from 'vue-i18n';
import App from '../App.vue';

const pinia = createPinia();
const I18n = createI18n({ locale: 'pt-BR', messages: translations });
const Api = createApi({ handler: Axios, namespace: '' });

pinia.use(({ store }) => {
  store.axios = Axios;
});

const app = createApp(App);
app.use(pinia);
app.use(Router);
app.use(Api);
app.use(I18n);
app.mount('#vue-app');
