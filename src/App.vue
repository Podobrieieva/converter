<template>
  <div v-if="!isLoading" class="main-page">
    <div class="main-page__list">
      <CardInfo
        v-for="cryptoCurrency in cryptocurrenciesInfo"
        :key="cryptoCurrency.name"
        :crypto-currency="cryptoCurrency"
        :active="cryptoCurrency.name === currentCrypto"
        @choose-card="(name) => currentCrypto = name"
      />
    </div>
    <div class="main-page__selected">Selected coin: {{ currentCrypto }}</div>
    <div>
      Volume:
      <input v-model="formFields.amount" type="text" v-mask="'#########'" @input="calculate" />
    </div>
    <div class="main-page__buttons">
      <ButtonCurrency
        v-for="currencyName in $options.currencies"
        :key="currencyName"
        :active="currentCoin === currencyName"
        :currency-name="currencyName"
        @choose-currency="calculate"
      />
    </div>
    <div
      v-if="formFields.amount !== null && formFields.amount !== ''"
      class="main-page__selected"
    >{{ resultInfo }}</div>
    <NotificationContainer />
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { mask } from "vue-the-mask";
import NProgress from "nprogress";
import { CRYPTOCURRENCIES } from "./mixins/constMixin";
import UIMixin from "./mixins/UIMixin";
import createForm from "./models/formField";
import CardInfo from "./components/CardInfo";
import ButtonCurrency from "./components/ButtonCurrency";
import NotificationContainer from "./components/NotificationContainer";

export default {
  name: "App",

  directives: {
    mask
  },

  mixins: [UIMixin],

  components: {
    CardInfo,
    ButtonCurrency,
    NotificationContainer
  },

  data: () => ({
    formFields: createForm(),
    currentCrypto: "BTC",
    currentCoin: "USD",
    result: null
  }),

  currencies: ["USD", "UAH", "RUB"],

  computed: {
    ...mapState(["USD", "UAH", "RUB", "isLoading"]),

    cryptocurrenciesInfo() {
      const array = [];

      Object.keys(this.USD).length !== 0 &&
        CRYPTOCURRENCIES.forEach(crypto => {
          array.push({
            name: crypto,
            values: {
              USD: this.formattedNumber(this.USD[crypto]),
              RUB: this.formattedNumber(this.RUB[crypto]),
              UAH: this.formattedNumber(this.UAH[crypto])
            }
          });
        });

      return array;
    },

    resultInfo() {
      return `${this.formFields.amount} ${
        this.currentCrypto
      } will be ${this.formattedNumber(this.result)} in ${this.currentCoin}`;
    }
  },

  created() {
    NProgress.start();
    this.updateState({ isLoading: true });
    this.$options.currencies.forEach((currency, index) => {
      this.getData(currency).finally(() => {
        if (index === this.$options.currencies.length - 1) {
          this.updateState({ isLoading: false });
          NProgress.done();
        }
      });
    });
  },

  methods: {
    ...mapMutations(["updateState"]),
    ...mapActions(["getData"]),

    calculate(event, currency) {
      if (currency !== undefined) {
        this.currentCoin = currency;
      }

      this.result =
        this.formFields.amount * this[this.currentCoin][this.currentCrypto];
    }
  }
};
</script>

<style>
.main-page {
  background-color: rgb(208, 211, 218);
}

.main-page__list,
.main-page__buttons {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.main-page__selected {
  display: flex;
  justify-content: center;
}
</style>