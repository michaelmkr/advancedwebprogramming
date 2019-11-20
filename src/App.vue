<template>
<<<<<<< HEAD
  <div id="app">
    <div id="nav">
<!--      <router-link to="/">Home</router-link>-->
<!--      |-->
      <router-link to="/">About</router-link>
      |
      <router-link to="/list-example">Todo List Example</router-link>
      |
      <router-link to="/map">Map</router-link>
      |
      <router-link to="/pokemon-list">Pokemon List</router-link>
=======
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
      <router-link class="mdl-navigation__link" to="/about">About</router-link>
      <router-link class="mdl-navigation__link" to="/button">Button Test</router-link>
      <router-link class="mdl-navigation__link" to="/map">Map</router-link>
      <router-link class="mdl-navigation__link" to="/list">Pokemon List</router-link>
      <router-link class="mdl-navigation__link" to="/list-example">Todo List Example</router-link>
      </nav>
>>>>>>> JFA
    </div>
  </header>
   <main class="mdl-layout__content">
      <router-view/>
  </main>
</div>
</template>

<style lang="scss">
</style>
