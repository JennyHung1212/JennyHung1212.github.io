import Vue from "vue";
import Router from "vue-router";
import HomePage from "@/components/HomePage";
import LifeInSG from "@/components/LifeInSG";

import Week01 from "@/components/blog_content/Week01.vue";
import Week02 from "@/components/blog_content/Week02.vue";
import Week03 from "@/components/blog_content/Week03.vue";
import Week04 from "@/components/blog_content/Week04.vue";
import Week05 from "@/components/blog_content/Week05.vue";
import Week06 from "@/components/blog_content/Week06.vue";
import Week07 from "@/components/blog_content/Week07.vue";
import Week08 from "@/components/blog_content/Week08.vue";
import Week09 from "@/components/blog_content/Week09.vue";
import Week10 from "@/components/blog_content/Week10.vue";
import Week11 from "@/components/blog_content/Week11.vue";
import Week12 from "@/components/blog_content/Week12.vue";
import Week13 from "@/components/blog_content/Week13.vue";
import Week14 from "@/components/blog_content/Week14.vue";
import Week15 from "@/components/blog_content/Week15.vue";

Vue.use(Router);

const router = new Router({
  base: "/",
  routes: [
    // {
    //   path: '/',
    //   name: 'HomePage',
    //   component: HomePage
    // },
    {
      path: "/life-in-sg",
      name: "LifeInSG",
      component: LifeInSG,
      redirect: { name: "week1" },
      children: [
        { path: "1", component: Week01, name: "week1" },
        { path: "2", component: Week02, name: "week2" },
        { path: "3", component: Week03, name: "week3" },
        { path: "4", component: Week04, name: "week4" },
        { path: "5", component: Week05, name: "week5" },
        { path: "6", component: Week06, name: "week6" },
        { path: "7", component: Week07, name: "week7" },
        { path: "8", component: Week08, name: "week8" },
        { path: "9", component: Week09, name: "week9" },
        { path: "10", component: Week10, name: "week10" },
        { path: "11", component: Week11, name: "week11" },
        { path: "12", component: Week12, name: "week12" },
        { path: "13", component: Week13, name: "week13" },
        { path: "14", component: Week14, name: "week14" },
        { path: "15", component: Week15, name: "week15" },
      ],
    },
  ],
});

export default router;
