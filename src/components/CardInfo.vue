<template>
  <div
    class="card-info"
    :class="{ 'active' : active }"
    @click="$emit('choose-card', cryptoCurrency.name)"
  >
    <div class="card-info__title">
      <img :src="getImage()" :alt="cryptoCurrency.name" />
      <div>{{ cryptoCurrency.name }}</div>
    </div>
    <div class="card-info__info">
      <div v-for="(value, name) in cryptoCurrency.values" :key="name">
        <span>{{ name }}:</span>
        {{ value }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardInfo",

  props: {
    cryptoCurrency: {
      type: Object,
      default: () => ({})
    },

    active: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    getImage() {
      return require(`../assets/${this.cryptoCurrency.name}.png`);
    }
  }
};
</script>

<style>
.card-info {
  display: flex;
  min-width: 200px;
  border: 1px solid blue;
  cursor: pointer;
}

.card-info:hover {
  background-color: aqua;
}

.active {
  background-color: blueviolet;
}

.card-info__title {
  display: flex;
  flex-direction: column;
}
</style>

