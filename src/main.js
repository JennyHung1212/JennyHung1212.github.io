import Vue from "vue";

import SiteContainer from "./site-container.vue";
import router from "./router";

// ant design
import { Carousel, Layout, Row, Col } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
Vue.component(Carousel.name, Carousel);
Vue.component(Layout.name, Layout);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

Vue.config.productionTip = false;

new Vue({
  render: h => h(SiteContainer),
  router
}).$mount(".site-container");
