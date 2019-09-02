<template>
  <md-button
    class="md-raised"
    :class="[active ? 'md-accent' :'md-primary']"
    @click="$emit('choose-currency', false, currencyName)"
  >{{ currencyName }}</md-button>
</template>

<script>
export default {
  name: "ButtonCurrency",

  props: {
    currencyName: {
      type: String,
      default: ""
    },

    active: {
      type: Boolean,
      default: false
    }
  }
};
</script>