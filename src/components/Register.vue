<template>
  <div>
    <div>
      <label>Name: </label>
      <input v-model="name" v-model.trim="name">
      <br>
      <span v-if="!$v.name.required">Name is required</span>
      <span v-else-if="!$v.name.minLength">Must conatin at least 3 characters.</span>
    </div>

    <div>
      <label>E-Mail: </label>
      <input v-model="email" v-model.trim="email">
      <br>
      <span v-if="!$v.email.required">Email is required.</span>
      <span v-else-if="!$v.email.email">Not a valid email.</span>
    </div>

    <div>
      <label>Passwort: </label>
      <input v-model="password" v-model.trim="password">
      <br>
      <span v-if="!$v.password.required">Password is required.</span>
      <span v-else-if="!$v.password.minLength">Must contain at least 8 characters.</span>
    </div>

    <div>
      <label>Passwort bestätigen: </label>
      <input v-model="passwordConfirm" v-model.trim="passwordConfirm">
      <br>
      <span v-if="!$v.passwordConfirm.required">Password is required.</span>
      <span v-else-if="!$v.passwordConfirm.minLength">Must contain at least 8 characters.</span>
      <span v-else-if="!$v.passwordConfirm.sameAsPassword">Must be the same as password.</span>
    </div>

    <div class="text-center">
      <button @click="submit" class="button" type="submit">
        Submit
      </button>
    </div>
  </div>


</template>

<script>
    import {required, email, minLength, sameAs} from "vuelidate/lib/validators";

    export default {
        name: 'register',
        data() {
            return {
                name: undefined,
                email: undefined,
                password: undefined,
                passwordConfirm: undefined
            }
        },
        validations: {
            name: {required, minLength: minLength(3)},
            email: {required, email},
            password: {required, minLength: minLength(8)},
            passwordConfirm: {required, sameAsPassword: sameAs('password')}
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
            }
        }
    }
</script>
