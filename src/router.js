import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/map',
      name: 'map',
      component: () => import(/* webpackChunkName: "about" */ './views/Map.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Registration.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
    },


// obsolete
    {
      path: '/MapView',
      name: 'mapview',
      component: () => import('./views/Mapview.vue'),
    },
    {
      path: '/ButtonView',
      name: 'buttonview',
      component: () => import('./views/ButtonView.vue'),
    },
    {
      path: '/ListView',
      name: 'listview',
      component: () => import('./views/ListView.vue'),
    },
    {
      path: '/list-example',
      name: 'list-example',
      component: () => import('./views/ListExample.vue'),
    },
    {
      path: '/pokemon-list',
      name: 'pokemon-list',
      component: () => import('./views/PokemonList.vue'),
    },

  ],
});
