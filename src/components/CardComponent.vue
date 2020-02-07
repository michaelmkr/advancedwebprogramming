<template>
  <div class="demo-card-wide mdl-card" ref="card"
       :class="`mdl-shadow--${depth}dp`">
    <div class="mdl-card__title"
         :class="{'mdl-card--border': borderTitle}"
         v-if="$slots.title || $slots.subtitle">
      <h2 class="mdl-card__title-text"
          v-if="$slots.title">
        <slot name="title" />
      </h2>
      <p class="mdl-card__subtitle-text"
         v-if="$slots.subtitle">
        <slot name="subtitle" />
      </p>
    </div>
    <div class="mdl-card__media"
         :class="{'mdl-card--border': borderMedia}"
         v-if="$slots.media">
      <slot name="media" />
    </div>
    <div class="mdl-card__supporting-text"
         :class="{'mdl-card--border': borderContent}"
         v-if="$slots.content">
      <slot name="content" />
    </div>
    <div class="mdl-card__actions"
         :class="{'mdl-card--border': borderActions}"
         v-if="$slots.actions">
      <slot name="actions" />
    </div>
    <div class="mdl-card__menu"
         v-if="$slots.menu">
      <slot name="menu" />
    </div>
  </div>
</template>

<script>

export default {
  name: 'MdlCard',
  props: {
    depth: {
      type: Number,
      default: 2,
      validator: value => [2, 3, 4, 6, 8, 16].includes(value),
    },
    borderTitle: Boolean,
    borderMedia: Boolean,
    borderContent: Boolean,
    borderActions: Boolean,
  },
  mounted() {
    // upgradeElement(this.$refs.card)
  },
};
</script>

<style lang="scss" scoped>
  .mdl-card__title {
    flex-direction: column;
    align-items: initial;
  }
  .mdl-card__title-text {
    align-self: initial;
  }
  .mdl-card__media img {
    width: 100%;
  }
  .mdl-card__actions {
    display: flex;
    flex-direction: row-reverse;

    .mdl-button + .mdl-button {
      margin-right: 8px;
    }
  }
</style>
