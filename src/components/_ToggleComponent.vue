<template>

<label class="mdl-switch mdl-js-switch mdl-js-ripple-effect" :for="$slots.default[0].text">
  <input type="checkbox"
  :id="$slots.default[0].text "
  v-on:change="$emit('change',$event.target.checked)"
  class="mdl-switch__input"
  :checked="checked">
  <span class="mdl-switch__label" >
    <slot> </slot>
  </span>
</label>

</template>

<script>
import {upgradeElement} from'@/components'
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
props: {
  checked:Boolean
},
}
</script>
