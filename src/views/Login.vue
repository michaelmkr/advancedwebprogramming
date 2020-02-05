<template>
  <div class="demo">
    <div>

      <form @submit.stop.prevent="submit" id="formDemo">
        <input-component :error="errorEmail"
                         @input="$v.email.$touch()"
                         label="E-Mail"
                         required
                         type="email"
                         v-model.trim="email"/>
        <input-component :error="errorPassword"
                         @input="$v.password.$touch()"
                         label="Passwort"
                         required
                         type="password"
                         v-model="password"/>

        <component-button @click="submit" color="colored" type="raised">Abschicken</component-button>
      </form>


    </div>
  </div>
</template>

<script>
  import {
    required,
    email
  } from 'vuelidate/lib/validators'

  import {
    mapActions
  } from 'vuex'
  import InputComponent from "../components/InputComponent";
  import ComponentButton from "../components/ButtonComponent";

  export default {
    components: {ComponentButton, InputComponent},
    data() {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      errorEmail() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.email.required === false) {
          error = 'E-Mail muss angegeben werden!'
        } else if (this.$v.email.email === false) {
          error = 'E-Mail Adresse entspricht nicht dem richtigen Format.'
        }
        return error
      },
      errorPassword() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Passwort muss angegeben werden!'
        }
        return error
      }
    },

    methods: {
      ...mapActions([
        'submitLogin'
      ]),
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid)
          return this.submitLogin({email: this.email, password: this.password})
      }
    },

    validations: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }

  }
</script>

<style scoped>
  .errorMessage {
    color: red
  }

  .util-center {
    margin: auto;
  }

  .util-spacing-h--40px {
    margin-top: 40px;
    margin-bottom: 40px
  }

</style>
