import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import * as VueGoogleMaps from 'vue2-google-maps';

Vue.config.productionTip = false;

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
  installComponents: true
});
