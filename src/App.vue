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
      <router-link class="mdl-navigation__link" to="/about">About</router-link>
      <router-link class="mdl-navigation__link" to="/map">Map</router-link>
      <router-link class="mdl-navigation__link" to="/login">Anmelden</router-link>
          </nav>
        </div>
      </header>
      <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">Title</span>
        <nav class="mdl-navigation">
          <router-link class="mdl-navigation__link" to="/">Home</router-link>
          <router-link class="mdl-navigation__link" to="/about">About</router-link>
          <router-link class="mdl-navigation__link" to="/map">Map</router-link>
           <router-link class="mdl-navigation__link" to="/login">Anmelden</router-link>
        </nav>
    </div>
    </div>
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
main {margin-top: 50px;}

div.mdl-layout__drawer-button {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    div.mdl-layout__drawer-button {
      display: block;
    }
  }

</style>
