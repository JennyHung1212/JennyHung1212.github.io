<template>
  <div class="row">
    <div class="col-md-3 col-sm-3 col-xs-12 sidebar-left">
      <div class="sidebar-left__title">
        <img src="../assets/images/life_in_sg.png" alt="Life in Singapore" />
      </div>
      <div class="sidebar-left__menu invisible-scrollbar">
        <div
          class="selected"
          v-for="(menu, index) in menuList"
          :key="menu"
          @click="$router.push({name: `week${index+1}`})"
        >
          <span>Week {{menu}}</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
      </div>
    </div>
    <div class="sidebar-left-mobile">
      <div class="sidebar-left-mobile__menu fade-in-left">
        <div class="sg-week-01 selected">
          <span>Week One</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-02 not-selected">
          <span>Week Two</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-03 not-selected">
          <span>Week Three</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-04 not-selected">
          <span>Week Four</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-05 not-selected">
          <span>Week Five</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-06 not-selected">
          <span>Week Six</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-07 not-selected">
          <span>Week Seven</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-08 not-selected">
          <span>Week Eight</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-09 not-selected">
          <span>Week Nine</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-10 not-selected">
          <span>Week Ten</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-11 not-selected">
          <span>Week Eleven</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-12 not-selected">
          <span>Week Twelve</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-13 not-selected">
          <span>Week Thirteen</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-14 not-selected">
          <span>Week Fourteen</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
        <div class="sg-week-15 not-selected">
          <span>Week Fifteen</span>
          <img src="../assets/images/right_arrow.png" />
        </div>
      </div>
    </div>
    <div class="col-md-9 col-sm-9 col-xs-12 invisible-scrollbar">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { left_menu } from "../assets/js/life_in_sg.js";
left_menu();
import Swiper from "swiper";

export default {
  name: "LifeInSG",
  data() {
    return {
      menuList: [
        "One",
        "Two",
        "Three",
        "Four",
        "Five",
        "Six",
        "Seven",
        "Eight",
        "Nine",
        "Ten",
        "Eleven",
        "Twelve",
        "Thirteen",
        "Fourteen",
        "Fifteen"
      ]
    };
  }
};

import { img_lightbox } from "../assets/js/lightbox.js";
img_lightbox();

import lightbox from "lightbox2";
lightbox.option({
  wrapAround: true,
  albumLabel: "%1 / %2"
});

import { swiper } from "../assets/js/swiper.js";
swiper();
</script>

<style scoped lang="scss">
@import "../assets/scss/layout";
@import "../assets/scss/sidebar-left";
</style>
