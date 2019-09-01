<template>
  <div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",

  props: {
    cryptoCurrency: {
      type: Object,
      default: () => ({})
    }
  }
};
</script>