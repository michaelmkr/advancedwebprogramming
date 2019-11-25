import Vue from 'vue';
import Router from 'vue-router';
import * as Home from './views/About'
import * as Map from './views/Map'
import * as Register from './views/Register'
import * as Login from './views/Login'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue'),
      //component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue'),
      //component: About,
    },
    {
      path: '/map',
      name: 'map',
      component: () => import('./views/Map.vue'),
      //component: Map,
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register.vue'),
      //component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login.vue'),
      //component: Login,
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
