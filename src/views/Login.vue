<!-- Michis Log In

<template>
    <login></login>

</template>

<script>
    import Login from "../components/Login";
    export default {
        name: "Login.vue",
        components: {Login}
    }
</script>

<style scoped>
</style>
-->




<!-- Julias Log In-->

  <template>


  <!-- Wide card with share menu button -->
<div class="demo-card-wide mdl-card mdl-shadow--2dp">
  <div class="mdl-card__title">
    <h2 class="mdl-card__title-text">Anmelden</h2>
  </div>

  <div class="mdl-card__supporting-text">
    <!-- Textfield with Floating Label -->
<form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3" v-model="email" v-model.trim="email">
    <label class="mdl-textfield__label" for="sample3">Name / E-Mail</label>
    <span v-if="!$v.email.required">Email is required.</span>
    <span v-else-if="!$v.email.email">Not a valid email.</span>
  </div>
  </form>

  <form action="#">
  <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input class="mdl-textfield__input" type="text" id="sample3" v-model="password" v-model.trim="password">
    <label class="mdl-textfield__label" for="sample3">Passwort</label>
    <span v-if="!$v.password.required">Password is required.</span>
  </div>

</form>


  </div>
  <div class="mdl-card__actions mdl-card--border">
    <router-link class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" to="/">Anmelden
    </router-link>
  </div>
  <!-- Share Button right corner
    <div class="mdl-card__menu">
    <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
      <i class="material-icons">share</i>
    </button>
  </div>-->
</div>
</template


<script>
  import {email, required} from 'vuelidate/lib/validators';

  export default {
    name: 'login',
    data() {
      return {
        email: undefined,
        password: undefined
      }
    },
    validations: {
      email: {email, required},
      password: {required}
    },
    methods: {
      submit(event) {
        this.$v.$touch();
        // if (this.$v.$invalid)
        // this.userLogin({ //import function
        //     password: this.password,
        //     email: this.email
        // })
      }
    }
  }
</script>

<style scoped>
.demo-card-wide.mdl-card {
margin:100px;
  width:600px;
  display:inline-block;

}
.demo-card-wide > .mdl-card__title {
  color:white;
  height: 176px;
  background: url('../assets/Anmelden.jpg') center / cover;

}
.demo-card-wide > .mdl-card__menu {
  color: #fff;
}

.mdl-card__title-text{
  font-weight: bold;
  text-align: center;
}


.mdl-card__actions {
  height: 60px;

}

</style>
