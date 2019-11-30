<template>
  <!-- Textfield with Floating Label -->

  <form action="#">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" id="sample3" type="text" v-model="name"
             v-model.trim="name">
      <label class="mdl-textfield__label" for="sample3">Name...</label>
      <span v-if="!$v.name.required">Name is required</span>
      <span v-else-if="!$v.name.minLength">Must conatin at least 3 characters.</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" id="sample3" type="text" v-model="email"
             v-model.trim="email">
      <label class="mdl-textfield__label" for="sample3">Email...</label>
      <span v-if="!$v.email.required">Email is required.</span>
      <span v-else-if="!$v.email.email">Not a valid email.</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" id="sample3" type="text" v-model="password"
             v-model.trim="password">
      <label class="mdl-textfield__label" for="sample3">Passwort...</label>
      <span v-if="!$v.password.required">Password is required.</span>
      <span v-else-if="!$v.password.minLength">Must contain at least 8 characters.</span>
    </div>
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
      <input class="mdl-textfield__input" id="sample3" type="text" v-model="passwordConfirm"
             v-model.trim="passwordConfirm">
      <label class="mdl-textfield__label" for="sample3">Passwort wiederholen...</label>
      <span v-if="!$v.passwordConfirm.required">Password is required.</span>
      <span v-else-if="!$v.passwordConfirm.minLength">Must contain at least 8 characters.</span>
      <span v-else-if="!$v.passwordConfirm.sameAsPassword">Must be the same as password.</span>
    </div>
  </form>

  <!-- Textfield with Floating Label -->


</template>

<script>
  import {
    required, email, minLength, sameAs,
  } from 'vuelidate/lib/validators';

  export default {
    name: 'register',
    data() {
      return {
        name: undefined,
        email: undefined,
        password: undefined,
        passwordConfirm: undefined,
      };
    },
    validations: {
      name: {required, minLength: minLength(3)},
      email: {required, email},
      password: {required, minLength: minLength(8)},
      passwordConfirm: {required, sameAsPassword: sameAs('password')},
    },
    methods: {
      submit(event) {
        this.$v.$touch();
        if (this.$v.$invalid) return;
        // this.userRegister({
        //     name: this.name,
        //     email: this.email,
        //     password: this.password,
        //     passwordConfirm: this.passwordConfirm
        // })
      },
    },
  };
</script>
