import Vue from 'vue';
import * as VueGoogleMaps from 'vue2-google-maps';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;

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
