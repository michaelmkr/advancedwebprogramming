<template>
  <div class="mdl-cell mdl-cell--12-col">
    <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label"
         :class="{'is-invalid': !!error}"
         ref="inputWrapper"
    >
      <input
        class="mdl-textfield__input"
        :type="type"
        :id="label"
        :value="value"
        v-bind="$attrs"
        v-on="inputListeners"
      >
      <label class="mdl-textfield__label" :for="label">{{labelName}}</label>
      <span class="mdl-textfield__error" v-if="error">{{error}}</span>
    </div>
  </div>

</template>

<script>
  import { upgradeElement } from '../tools/index'
  export default {
    props: {
      disabled: {
        type: Boolean
      },
      type: {
        type: String,
        validator: value => ['text', 'email', 'password', 'passwordRepeat', 'passwordOld'].includes(value)
      },
      label: {
        type: String
      },
      value: {
        type: String,
        required: Boolean
      },
      error: {
        type: String
      }
    },
    computed: {
      labelName () {
        return this.label + (this.required ? ' *' : '')
      },
      inputListeners () {
        var vm = this
        return Object.assign({},
          this.$listeners,
          {
            // This ensures that the component works with v-model
            input: function (event) {
              vm.$emit('input', event.target.value)
            }
          }
        )
      }
    },
    mounted () {
      upgradeElement(this.$refs.inputWrapper)
    }
  }
</script>

<style>

</style>
