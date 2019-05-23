import Vue from "vue";
import SiteContainer from "./site-container.vue";
import router from './router';

Vue.config.productionTip = false;

new Vue({
  render: h => h(SiteContainer),
  router
}).$mount(".site-container");
