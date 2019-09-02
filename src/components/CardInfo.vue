<template>
  <md-card md-with-hover>
    <md-ripple>
      <md-card-header>
        <md-card-header-text>
          <div
            v-for="(value, name) in cryptoCurrency.values"
            :key="name"
            class="md-title"
          >{{ name }}: {{ value }}</div>
        </md-card-header-text>

        <md-card-media md-medium>
          <img :src="getImage()" :alt="cryptoCurrency.name" />
        </md-card-media>
      </md-card-header>
      <md-card-actions>
        <md-button
          class="card-info__button"
          :class="[active ? 'md-accent' :'md-primary']"
          @click="$emit('choose-card', cryptoCurrency.name)"
        >{{ active ? 'Selected' : 'Choose' }}</md-button>
      </md-card-actions>
    </md-ripple>
  </md-card>
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

.md__button {
  height: 250px;
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