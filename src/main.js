import Vue from 'vue';
import store from './store/index';
import App from './App.vue';
import 'nprogress/nprogress.css';
import {
  MdButton,
  MdContent,
  MdCard,
  MdRipple,
} from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdCard);
Vue.use(MdRipple);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')