<template>
  <div class="mdl-grid">

    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title" style="background-color: #607d8b">
        <h2 class="mdl-card__title-text mdl-color-text--white">User Details</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid">


        <form @submit.stop.prevent="submit" id="formSubmit">
          <input-component :error="errorName" @input="$v.text.$touch()"
                           label="Name"
                           required
                           type="text"
                           v-model.trim="text"/>
          <input-component :error="errorEmail" @input="$v.email.$touch()"
                           label="E-Mail"
                           required
                           type="email"
                           v-model.trim="email"/>
          <input-component :error="errorPasswordOld" @input="$v.passwordOld.$touch()"
                           label="Altes Passwort"
                           required
                           type="password"
                           v-model="passwordOld"/>
          <input-component :error="errorPassword" @input="$v.password.$touch()"
                           label="Neues Passwort"
                           required
                           type="password"
                           v-model="password"/>
          <input-component :error="errorPasswordRepeat" @input="$v.passwordRepeat.$touch()"
                           label="Neues Passwort wiederholen"
                           required
                           type="password"
                           v-model.trim="passwordRepeat"/>
        </form>
        <component-button color="colored" form="formSubmit" type="raised">Ändern
        </component-button>


      </div>
    </div>
  </div>
</template>
<script>
  import {
    required,
    email,
    minLength,
    sameAs
  } from 'vuelidate/lib/validators'

  import {
    mapActions, mapGetters
  } from 'vuex'
  import InputComponent from "../components/InputComponent";
  import ComponentButton from "../components/ButtonComponent";

  export default {
    components: {InputComponent, ComponentButton},
    data() {
      return {
        text: '',
        email: '',
        passwordOld: '',
        password: '',
        passwordRepeat: ''
      }
    },
    mounted() {
      this.retrieveUserDetails(this.getAuthToken);
      setTimeout(() => {
        this.text = this.getUsername;
        this.email = this.getEmail;
      }, 1500);
    },
    computed: {
      ...mapGetters([
        'getUsername',
        'getEmail',
        'getSnackBar',
        'getAuthToken',
      ]),
      errorName() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.text.required === false) {
          error = 'Name muss angegeben werden!'
        } else if (this.$v.text.minLength === false) {
          error = 'Name muss mindestens 3 Zeichen enthalten'
        }
        return error
      },
      errorEmail() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.email.required === false) {
          error = 'E-Mail muss angegeben werden!'
        } else if (this.$v.email.email === false) {
          error = 'E-Mail Format nicht korrekt!'
        }
        return error
      },
      errorPasswordOld() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.passwordOld.required === false) {
          error = 'Ihr altes Passwort muss angegeben werden!'
        }
        return error
      },
      errorPassword() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Ein neues Passwort muss angegeben werden!'
        } else if (this.$v.password.minLength === false) {
          error = 'Das neue Passwort muss mindestens 8 Zeichen enthalten.'
        }
        return error
      },
      errorPasswordRepeat() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.passwordRepeat.required === false) {
          error = 'Das neue Passwort muss wiederholt werden!'
        } else if (this.$v.passwordRepeat.sameAsPassword === false) {
          error = 'Die Passwörter müssen übereinstimmen!'
        }
        return error
      }

    },
    methods: {
      ...mapActions([
        'updateUserDetails',
        'retrieveUserDetails',
      ]),
      submit() {
        this.$v.$touch();
        if (!this.$v.$invalid)
          return this.updateUserDetails({
            name: this.name, email: this.email, password: this.passwordOld, passwordNew: this.password, token: this.getAuthToken,
          }).then(() => { setTimeout(() => { this.$vtNotify(this.getSnackBar); }, 2000); });
      }
    },

    validations: {
      text: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      passwordOld: {
        required,
      },
      password: {
        required,
        minLength: minLength(8)
      },
      passwordRepeat: {
        required,
        sameAsPassword: sameAs('password')
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

  .util-max-512px {
    max-width: 512px;
  }

  util-no-decoration {
    text-decoration: none;
  }

  .cardForm {
    margin: auto;
    min-width: 200px;
    max-width: 500px;
    width: auto;
  }
</style>
