<template>
  <div class="mdl-grid">

    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title" style="background-color: #607d8b">
        <h2 class="mdl-card__title-text mdl-color-text--white">User Details</h2>
      </div>
      <div class="mdl-card__supporting-text mdl-grid">
        <form @submit.stop.prevent="submit">
          <input-component :error="errorName"
                           @input="$v.name.$touch()"
                           label="Name"
                           required
                           type="text"
                           v-model.trim="name"
          />
          <input-component :error="errorEmail"
                           @input="$v.email.$touch()"
                           label="E-Mail"
                           required
                           type="email"
                           v-model.trim="email"
          />
          <input-component :error="errorPasswordOld"
                           @input="$v.passwordOld.$touch()"
                           label="altes Passwort"
                           required
                           type="password"
                           v-model.trim="passwordOld"
          />
          <input-component :error="errorPassword"
                           @input="$v.password.$touch()"
                           label="neues Passwort"
                           required
                           type="password"
                           v-model.trim="password"
          />
          <input-component :error="errorPasswordRepeat"
                           @input="$v.passwordRepeat.$touch()"
                           label="neues Passwort wiederholen"
                           required
                           type="password"
                           v-model.trim="passwordRepeat"
          />
          <br>
          <div align="center" class="mdl-cell mdl-cell--12-col send-button">
            <component-button color="colored" type="raised" @click="submit">Ändern</component-button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import {mapActions, mapGetters} from 'vuex'
  import ComponentButton from "../components/ButtonComponent";
  import InputComponent from "../components/InputComponent";

  export default {
    name: 'UserDetails',
    components: {InputComponent, ComponentButton},
    data() {
      return {
        name: '',
        email: '',
        passwordOld: '',
        password: '',
        passwordRepeat: ''
      }
    },
    mounted() {
      this.retrieveUserDetails(this.getAuthToken);
      setTimeout(()=>{
        this.name = this.getUsername;
        this.email = this.getEmail;
      }, 1500)
    },
    computed: {
      ...mapGetters([
        'getAuthToken',
        'getUsername',
        'getEmail',
        'getSnackBar',
      ]),
      errorName() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.name.required === false) {
          error = 'Name muss angegeben werden!'
        } else if (this.$v.name.minLength === false) {
          error = 'Ihr Name muss mindestens 3 Zeichen enthalten!'
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
          error = 'Keine korrekte E-Mail Adresse angegeben!'
        }
        return error
      },
      errorPasswordOld() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Das alte Passwort muss angegeben werden!'
        }
        return error
      },
      errorPassword() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Ein Passwort muss angegeben werden!'
        }
        return error
      },
      errorPasswordRepeat() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.passwordRepeat.required === false) {
          error = 'Passwort muss wiederholt werden!'
        } else if (this.$v.passwordRepeat.sameAsPassword === false) {
          error = 'Passwörter stimmen nicht überein!'
        }
        return error
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: {
        required,
        email
      },
      passwordOld: {
        required,
        minLength: minLength(8)
      },
      password: {
        required,
        minLength: minLength(8)
      },
      passwordRepeat: {
        required,
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      ...mapActions([
        'submitRegister',
        'retrieveUserDetails',
        'updateUserDetails'
      ]),
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid)
          return this.updateUserDetails({name: this.name, email: this.email, password: this.passwordOld, passwordNew: this.password, token: this.getAuthToken}).then(() => {setTimeout(() => {this.$vtNotify(this.getSnackBar)}, 2000)});
      },

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

  .util-spacing-h--40px {
    margin-top: 40px;
    margin-bottom: 40px
  }

  .util-no-decoration {
    text-decoration: none;
  }
</style>
