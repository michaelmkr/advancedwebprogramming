<template>
  <div class="form pt-6">
    <div class="summary text-red" v-if="$v.form.$error">
      Form has errors
    </div>
    <form @submit.prevent="submit">
      <div class="flex justify-center my-6">

        <div
          :class="{ 'hasError': $v.form.name.$error }"
          class="px-4">
          <label class="mr-2 font-bold text-grey">Name</label>
          <input class="input" type="text" v-model="form.name">
        </div>

        <div
          :class="{ 'hasError': $v.form.email.$error }"
          class="px-4">
          <label class="mr-2 font-bold text-grey">Email</label>
          <input class="input" type="email" v-model="form.email">
        </div>

        <div
          :class="{ 'hasError': $v.form.password.$error }"
          class="px-4">
          <label class="mr-2 font-bold text-grey">Password</label>
          <input class="input" type="password" v-model="form.password">
        </div>

        <div
          :class="{ 'hasError': $v.form.password2.$error }"
          class="px-4">
          <label class="mr-2 font-bold text-grey">Repeat Password</label>
          <input class="input" type="password" v-model="form.password2">
        </div>

      </div>
      <div class="text-center">
        <button @click="submit" class="button" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
    import {required, email, minLength, sameAs} from "vuelidate/lib/validators";

    export default {
        name: "RegisterComponent",

        data() {
            return {
                form: {
                    name: "",
                    email: "",
                    password: "",
                    password2: ""
                }
            };
        },

        validations: {
            form: {
                name: {required, min: minLength(3)},
                email: {required, email},
                password: {required, min: minLength(8)},
                password2: {required, sameAsPassword: sameAs('password')}
            }
        },

        methods: {
            submit() {
                this.$v.form.$touch();
                if (this.$v.form.$error) return;
                // to form submit after this
                alert('Form submitted')
            }
        }
    };
</script>

<style>
  .input {
    background-color: #f7f7f7;
    border: 1px solid rgb(199, 199, 199);
    padding: 0.3rem 0.5rem;
    border-radius: 2px;

    .hasError & {
      border-color: red;
    }
  }

  .hasError label {
    color: red;
  }

  .button {
    background: #3ab409;
    padding: 0.5rem 1rem;
    color: white;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 3px;
    border-radius: 2px;
    border-bottom: 2px solid #2e9106;
    transition: 0.3s;

    &:hover {
      background: #2e9107;
      border-bottom: 2px solid #226906;
    }
  }
</style>
