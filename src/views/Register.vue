<template>
  <div class="mdl-grid">

    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title" style="background-color: #607d8b">
        <h2 class="mdl-card__title-text mdl-color-text--white">Registrierung</h2>
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
          <input-component :error="errorPassword"
                           @input="$v.password.$touch()"
                           label="Passwort"
                           required
                           type="password"
                           v-model.trim="password"
          />
          <input-component :error="errorPasswordRepeat"
                           @input="$v.passwordRepeat.$touch()"
                           label="Passwort wiederholen"
                           required
                           type="password"
                           v-model.trim="passwordRepeat"
          />
          <br>

          <div align="center" class="mdl-cell mdl-cell--12-col send-button">
            <component-button color="colored" type="raised" @click="submit">Abschicken</component-button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'
  import {mapGetters, mapActions} from 'vuex'
  import ComponentButton from "../components/ButtonComponent";
  import InputComponent from "../components/InputComponent";

  export default {
    components: {InputComponent, ComponentButton},
    data() {
      return {
        name: '',
        email: '',
        password: '',
        passwordRepeat: ''
      }
    },
    computed: {
      ...mapGetters([
        'getSnackBar'
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
      errorPassword() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Ein Passwort muss angegeben werden!'
        } else if (this.$v.password.minLength === false) {
          error = 'Das Passwort muss mindestens 8 Zeichen enthalten!'
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
        'submitRegister'
      ]),
      submit() {
        this.$v.$touch();
        if (this.$v.$invalid)
          return this.submitRegister({name: this.name, email: this.email, password: this.password}).then(() => {setTimeout(() => {this.$vtNotify(this.getSnackBar)}, 2000)});
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

  .util-spacing-h--40px {
    margin-top: 40px;
    margin-bottom: 40px
  }

  .util-no-decoration {
    text-decoration: none;
  }
</style>
