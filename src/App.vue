<template>
  <div class="demo-layout-transparent mdl-layout mdl-js-layout" id="app">
    <header class="mdl-layout__header ">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">Pokemon Go</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/">Home</router-link>
          <router-link class="mdl-navigation__link" to="/map">Map</router-link>
          <router-link class="mdl-navigation__link" to="/register">Register</router-link>
          <router-link class="mdl-navigation__link" to="/login">Login</router-link>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <router-view/>
    </main>
  </div>
</template>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
