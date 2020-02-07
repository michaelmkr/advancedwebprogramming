<template>
  <div class="mdl-grid">

    <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
      <div class="mdl-card__title" style="background-color: #607d8b">
        <h2 class="mdl-card__title-text mdl-color-text--white">Registrierung</h2>
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
          <input-component :error="errorPassword" @input="$v.password.$touch()"
                           label="Passwort"
                           required
                           type="password"
                           v-model="password"/>
          <input-component :error="errorPasswordRepeat" @input="$v.passwordRepeat.$touch()"
                           label="Passwort wiederholen"
                           required
                           type="password"
                           v-model.trim="passwordRepeat"/>
        </form>
        <component-button color="colored" form="formSubmit" type="raised">Abschicken
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
        password: '',
        passwordRepeat: ''
      }
    },
    computed: {
      ...mapGetters([
        'getSnackBar',
      ]),
      errorName() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.text.required === false) {
          error = 'Name ist ein Pflichtfeld'
        } else if (this.$v.text.minLength === false) {
          error = 'Name muss mind. 3 Zeichen enthalten'
        }
        return error
      },
      errorEmail() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.email.required === false) {
          error = 'Email ist ein Pflichtfeld'
        } else if (this.$v.email.email === false) {
          error = 'E-Mail muss korrektem Format entsprechen'
        }
        return error
      },

      errorPassword() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.password.required === false) {
          error = 'Passwort ist ein Pflichtfeld'
        } else if (this.$v.password.minLength === false) {
          error = 'Passwort muss mind. 8 Zeichen enthalten'
        }
        return error
      },
      errorPasswordRepeat() {
        let error;
        if (!this.$v.$error) {
          error = ''
        } else if (this.$v.passwordRepeat.required === false) {
          error = 'Passwortwiederholung wird benötigt'
        } else if (this.$v.passwordRepeat.sameAsPassword === false) {
          error = 'Passwörter müssen übereinstimmen'
        }
        return error
      }

    },

    methods: {
      ...mapActions([
        'submitRegister',
      ]),
      submit() {
        this.$v.$touch();
        if (!this.$v.$invalid)
          return this.submitRegister({
            text: this.text,
            email: this.email,
            password: this.password
          }).then(() => {
            setTimeout(() => {
              this.$vtNotify(this.getSnackBar);
            }, 2000);
          });
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
