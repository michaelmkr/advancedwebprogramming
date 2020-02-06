import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import Vuelidate from 'vuelidate/src';
import VueSuggestion from 'vue-suggestion';
import VueToastify from 'vue-toastify';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(VueToastify);
Vue.use(VueSuggestion);

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDfNGAYP6wSrKidoZBeFHF2cuFSCwsgReQ',
    libraries: 'places', // necessary for places input
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDthJr1M70ma5q3pD3HeVCmWNlNsK9NOAA',
    libraries: 'places',
  },
  installComponents: true,
});

Vue.use(Vuelidate);
