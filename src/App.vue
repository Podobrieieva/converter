<template>
  <div>
    <CardInfo
      v-for="cryptoCurrency in cryptocurrenciesInfo"
      :key="cryptoCurrency.name"
      :crypto-currency="cryptoCurrency"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { CRYPTOCURRENCIES } from "./mixins/constMixin";
import CardInfo from "./components/CardInfo";

export default {
  name: "App",

  components: {
    CardInfo
  },

  currencies: ["USD", "UAH", "RUB"],

  computed: {
    ...mapState(["USD", "UAH", "RUB"]),

    cryptocurrenciesInfo() {
      const array = [];

      CRYPTOCURRENCIES.forEach(crypto => {
        array.push({
          name: crypto,
          valueUSD: this.USD[crypto],
          valueRUB: this.RUB[crypto],
          valueUAH: this.UAH[crypto]
        });
      });

      return array;
    }
  },

  created() {
    this.$options.currencies.forEach(currency => this.getData(currency));
  },

  methods: {
    ...mapActions(["getData"])
  }
};
</script>