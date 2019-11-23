<template>
  <div>
    <div>
      <label>E-Mail: </label>
      <input v-model="email">
      <br>
      <span v-if="!$v.email.required">Email is required.</span>
      <span v-else-if="!$v.email.email">Not a valid email.</span>
    </div>
    <div>
      <label>Passwort: </label>
      <input v-model="password">
      <br>
      <span v-if="!$v.password.required">Password is required.</span>
    </div>
  </div>
</template>

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

</style>
