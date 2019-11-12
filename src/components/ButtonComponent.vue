<template>
  <!-- Accent-colored raised button with ripple -->
    <button
    class="mdl-button mdl-js-button mdl-js-ripple-effect"
    :class="[buttonType, buttonColor]"
    :disabled="disabled"
    ref="button">
    <i v-if="icon" class="material-icons">{{icon}}</i>
    <slot></slot>
  </button>

</template>

<script>
  export default {
    name: 'buttoncomponent',
    data (){
      return {
        foo: 'bar'    //data() braucht man damit verschiedene button objekte generiert werden!!??????? not sure
      }
    },
    props: {
      icon: String,
      disabled: {
        type: Boolean
      },
      color: {
        type: String,
        validator: value => ['primary', 'colored', 'accent'].includes(value)
      },
     /* color: {
        type: String,
        Hier wäre diese Arrow Funktion =>
        validator: function (value){
          return ['primary', 'colored', 'accent'].includes(value)
        }
      }*/
      type: {
        type: String,
        validator: value => ['raised', 'fab', 'mini-fab', 'icon'].includes(value)
      }
    },
    computed: {
      buttonType () {
        let val = ''
        if (this.type) {
          val = 'mdl-button--' + this.type
        }
        if (this.type === 'mini-fab') {         //dieses if ist ein Ausschlussverfahren, damit mini fab und fab nicht gleichzeitig auftreten können?!
          val += ' mdl-button--fab'
        }
        return val
      },
      buttonColor () {
        let val = ''
        if (this.color) {
          val = 'mdl-button--' + this.color
        }
        return val
      }
    },
    methods: {
      upgradeButton (button) {
        if (window.componentHandler) {
          window.componentHandler.upgradeElement(button)
        } else {
          window.setTimeout(this.upgradeButton, 100, button)
        }
      }
    },
    mounted () {
      this.upgradeButton(this.$refs.button)
    }
  }



</script>

<style scoped>



</style>
