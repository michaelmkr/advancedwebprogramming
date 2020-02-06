<template>
  <!-- Wide card with share menu button -->
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text"></h2>
    </div>

    <div class="mdl-card__supporting-text">
      <!-- Textfield with Floating Label -->
      <h1>Willkommen bei pgmon+</h1>

      <p :style="{display: getAuthToken !== '' ? 'none' : 'unset'}">Du kannst dich <router-link to="/login">einloggen</router-link> oder einen <router-link to="/register">neuen Account erstellen</router-link>.</p>
      <p :style="{display: getAuthToken === '' ? 'none' : 'unset'}">Du kannst <router-link to="/user">deine User Details ansehen</router-link> oder dich <router-link to="/logout">ausloggen</router-link>.</p>
      <br><br>
      <p> Pokémon Go ist ein Spiel für Handheld-Mobilgeräte wie Smartphones und Tabletcomputer.
        In dem Spiel können die Spieler virtuelle Fantasiewesen fangen,
        entwickeln und in virtuellen Kämpfen gegeneinander antreten lassen.
        Bis Ende 2018 wurde das Spiel über eine Milliarde Mal heruntergeladen. </p>

    </div>
  </div>

</template>

<script>
  // @ is an alias to /src

  import ComponentButton from "../components/ButtonComponent";
  import {mapGetters} from "vuex";
  import router from '../router'

  export default {
    name: 'home',
    components: {
      ComponentButton

    },
    computed: {
      ...mapGetters([
        'getAuthToken',
      ]),
    },
  };
</script>

<style scoped>
  .demo-card-wide.mdl-card {
    width: 100%;


  }

  .demo-card-wide > .mdl-card__title {
    color: white;
    height: 600px;
    background: url('../assets/header_bild.jpg') center / cover;

  }

  .demo-card-wide > .mdl-card__menu {
    color: #fff;
  }

  .mdl-card__title-text {
    font-weight: bold;
    text-align: center;
  }


  .mdl-card__actions {
    height: 60px;

  }

  h1 {
    color: #2c3e50;
    font-weight: Bold;
  }

  p {
    width: 50%;
    display: inline-block;
  }

</style>
