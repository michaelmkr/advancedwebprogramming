<template>
  <div class="demo-layout-transparent mdl-layout mdl-js-layout" id="app">
    <!-- Always shows a header, even in smaller screens. -->
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <!-- Title -->
          <span class="mdl-layout-title">Pokemon GO</span>
          <!-- Add spacer, to align navigation to the right -->
          <div class="mdl-layout-spacer"></div>
          <!-- Navigation. We hide it in small screens. -->
          <nav class="mdl-navigation mdl-layout--large-screen-only">
            <router-link class="mdl-navigation__link" to="/">Home</router-link>
            <router-link class="mdl-navigation__link" to="/map">Map</router-link>
            <router-link class="mdl-navigation__link" to="/list">Liste</router-link>
            <router-link :style="{display: getAuthToken === '' ? 'none' : 'block'}"
                         class="mdl-navigation__link" to="/user">User
            </router-link>
            <router-link :style="{display: getAuthToken === '' ? 'none' : 'block'}"
                         class="mdl-navigation__link" to="/logout">Logout
            </router-link>
            <router-link :style="{display: getAuthToken !== '' ? 'none' : 'block'}"
                         class="mdl-navigation__link" to="/login">Anmelden
            </router-link>
            <router-link :style="{display: getAuthToken !== '' ? 'none' : 'block'}"
                         class="mdl-navigation__link" to="/register">Registrieren
            </router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Menu</span>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/">Home</router-link>
          <router-link class="mdl-navigation__link" to="/map">Map</router-link>
          <router-link class="mdl-navigation__link" to="/list">Liste</router-link>
          <router-link :style="{display: getAuthToken === '' ? 'none' : 'block'}"
                       class="mdl-navigation__link" to="/user">User
          </router-link>
          <router-link :style="{display: getAuthToken === '' ? 'none' : 'block'}"
                       class="mdl-navigation__link" to="/logout">Logout
          </router-link>
          <router-link :style="{display: getAuthToken !== '' ? 'none' : 'block'}"
                       class="mdl-navigation__link" to="/login">Anmelden
          </router-link>
          <router-link :style="{display: getAuthToken !== '' ? 'none' : 'block'}"
                       class="mdl-navigation__link" to="/register">Registrieren
          </router-link>
        </nav>
      </div>

      <main class="mdl-layout__content" id="main">
        <router-view class="main-content"/>
      </main>
    </div>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from "vuex";

  export default {
    data(){
      return {
        position:{
          lat: '',
          lng: ''
        }
      }
    },
    mounted() {
      this.setDarkTheme();
    },
    computed: {
      ...mapGetters([
        'getAuthToken',
        'getIsNight'
      ]),
    },
    methods: {
      setDarkTheme() {
        if (this.getIsNight === true) {
          document.getElementById("main").style.backgroundColor = 'darkslategray';
        }
      }
    }
  };
</script>

<style lang="scss" scoped>

  /*main{*/
  /*  background-color: darkslategray;*/
  /*}*/

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }


  div.mdl-layout__drawer-button {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    div.mdl-layout__drawer-button {
      display: block;
    }
  }

  .mdl-layout__content {
    padding: 1rem;

  }


</style>
