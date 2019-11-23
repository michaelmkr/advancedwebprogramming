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
      // component: Home,
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/map',
      name: 'map',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
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
      path: '/MapView',
      name: 'mapview',
      component: () => import('./views/Mapview.vue'),
    },
  ],
});
