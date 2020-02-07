import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Map from './views/Map';
import About from './views/About';
import Login from './views/Login';
import Register from './views/Register';
import PokemonList from './components/PokemonList';
import UserDetails from './views/UserDetails';
import Logout from './views/Logout';
import store from './store/index';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      beforeEnter: (to, from, next) => {
        if (store.state.authToken !== '') {
          alert('Sie sind bereits eingeloggt!');
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: (to, from, next) => {
        if (store.state.authToken !== '') {
          alert('Sie sind bereits eingeloggt!');
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/list',
      name: 'list',
      component: PokemonList,
    },
    {
      path: '/user',
      name: 'user',
      component: UserDetails,
      beforeEnter: (to, from, next) => {
        if (store.state.authToken === '') {
          alert('Sie haben keine Berechtigung für diese Route!');
          next('/');
        } else {
          next();
        }
      },
    },
    {
      path: '/logout',
      name: 'logout',
      component: Logout,
    },
  ],
});
