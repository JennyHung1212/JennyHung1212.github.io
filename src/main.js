import Vue from "vue";

import SiteContainer from "./site-container.vue";
import router from "./router";

// ant design
import { Carousel, Layout } from "ant-design-vue";
Vue.component(Carousel.name, Carousel);
Vue.component(Layout.name, Layout);

Vue.config.productionTip = false;

new Vue({
  render: h => h(SiteContainer),
  router
}).$mount(".site-container");
