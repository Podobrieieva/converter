import Vue from 'vue';
import store from './store/index';
import App from './App.vue';
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')