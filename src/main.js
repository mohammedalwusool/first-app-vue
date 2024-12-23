/* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/styles.css';
import { globalStore } from './store/globalStore.js';
// Create the Vue app
const app = createApp(App);
app.provide('globalStore', globalStore);
// Add a custom filter using a global method (alternative approach)
app.config.globalProperties.$filters = {
  uppercase(value) {
    return value ? value.toUpperCase() : '';
  },

  lowercase(value) {
    return 'rrrrr';
  },
};

app.use(store).use(router).mount('#app');
