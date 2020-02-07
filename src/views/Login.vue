<template>
  <div class="demo">
    <div>
      <div class="mdl-card mdl-shadow--16dp util-center util-spacing-h--40px">
        <div class="mdl-card__title" style="background-color: #607d8b">
          <h2 class="mdl-card__title-text mdl-color-text--white">Anmelden</h2>
        </div>
        <div class="mdl-card__supporting-text mdl-grid">
            <form @submit.stop.prevent="submit" id="formSubmit">
              <input-component label="E-Mail" type="email"
                               required
                               v-model.trim="email"
                               :error="errorEmail"
                               @input="$v.email.$touch()" />
              <input-component label="Passwort" type="password"
                               required
                               v-model="password"
                               :error="errorPassword"
                               @input="$v.password.$touch()" />
            </form>
            <component-button type="raised" color="colored" form="formSubmit">Login</component-button>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
import {
  required,
  email,
} from 'vuelidate/lib/validators';

import {
  mapActions, mapGetters,
} from 'vuex';

import InputComponent from '../components/InputComponent';
import ComponentButton from '../components/ButtonComponent';

export default {
  components: { ComponentButton, InputComponent },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters([
      'getSnackBar',
    ]),
    errorEmail() {
      let error;
      if (!this.$v.$error) {
        error = '';
      } else if (this.$v.email.required === false) {
        error = 'E-Mail muss angegeben werden!';
      } else if (this.$v.email.email === false) {
        error = 'E-Mail Adresse entspricht nicht dem richtigen Format.';
      }
      return error;
    },
    errorPassword() {
      let error;
      if (!this.$v.$error) {
        error = '';
      } else if (this.$v.password.required === false) {
        error = 'Passwort muss angegeben werden!';
      }
      return error;
    },
  },

  methods: {
    ...mapActions([
      'submitLogin',
    ]),
    submit() {
      this.$v.$touch();
      if (!this.$v.$invalid) return this.submitLogin({ email: this.email, password: this.password }).then(() => { setTimeout(() => { this.$vtNotify(this.getSnackBar); }, 2000); });
    },
  },

  validations: {
    email: {
      required,
      email,
    },
    password: {
      required,
    },
  },

};
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
