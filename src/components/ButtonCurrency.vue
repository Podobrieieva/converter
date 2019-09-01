<template>
  <button
    type="button"
    :class="{ 'active' : active }"
    @click="$emit('choose-currency', false, currencyName)"
  >{{ currencyName }}</button>
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

<style>
.button-currency {
  display: flex;
  min-width: 200px;
  border: 1px solid blue;
  cursor: pointer;
}

.active {
  background-color: blueviolet;
}
</style>