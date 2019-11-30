<template>
  <button
    class="mdl-button mdl-js-button mdl-js-ripple-effect"
    v-bind:class="[buttonType, buttonColor]"
    v-bind:disabled="disabled"
    ref="button">
    <i v-if="icon" class="material-icons">{{icon}}</i>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'componentButton',
  props: {
    icon: String,
    disabled: {
      type: Boolean,
    },
    color: {
      type: String,
      validator: value => ['primary', 'colored', 'accent'].includes(value),
    },
    type: {
      type: String,
      validator: value => ['raised', 'fab', 'mini-fab', 'icon'].includes(value),
    },
  },
  computed: {
    buttonType() {
      let val = '';
      if (this.type) {
        val = `mdl-button--${this.type}`;
      }
      if (this.type === 'mini-fab') {
        val += ' mdl-button--fab';
      }
      return val;
    },
    buttonColor() {
      let val = '';
      if (this.color) {
        val = `mdl-button--${this.color}`;
      }
      return val;
    },
  },
  methods: {
    upgradeButton(button) {
      if (window.componentHandler) {
        window.componentHandler.upgradeElement(button);
      } else {
        window.setTimeout(this.upgradeButton, 100, button);
      }
    },
  },
  mounted() {
    this.upgradeButton(this.$refs.button);
  },
};
</script>

<style>

</style>
