<template>
  <a-row>
    <a-col :xs="24" :sm="6" :md="6" :lg="5" class="sidebar-left">
      <div class="sidebar-left__title">
        <div>
          <img v-lazy="'../assets/images/life_in_sg.png'" alt="Life in Singapore" />
        </div>
      </div>
      <div class="sidebar-left__menu invisible-scrollbar">
        <div
          :class="[$router.currentRoute.path.split('/')[2] === (index + 1).toString() ? 'selected' : 'not-selected']"
          v-for="(menu, index) in menuList"
          :key="menu"
          @click="$router.push({ name: `week${index + 1}` })"
        >
          <span>Week {{menu}}</span>
          <img v-lazy="'../assets/images/right_arrow.png'" />
        </div>
      </div>
    </a-col>
    <a-col :span="24" class="sidebar-left-mobile" :class="{open: open || isOpen}">
      <div class="sidebar-left-mobile__menu fade-in-left">
        <div
          :class="[$router.currentRoute.path.split('/')[2] === (index + 1).toString() ? 'selected' : 'not-selected']"
          v-for="(menu, index) in menuList"
          :key="menu"
          @click="$router.push({ name: `week${index + 1}` }), isOpen=false, $emit('close-menu')"
        >
          <span>Week {{menu}}</span>
          <img v-lazy="'../assets/images/right_arrow.png'" />
        </div>
      </div>
    </a-col>
    <a-col :xs="24" :sm="18" :md="18" :lg="19" class="invisible-scrollbar main-content">
      <router-view></router-view>
    </a-col>
  </a-row>
</template>

<script>
import Swiper from "swiper";

export default {
  name: "LifeInSG",
  props: {
    open: {
      type: Boolean,
      default: false,
    },
  },
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
        "Fifteen",
      ],
      isSelected: false,
      isOpen: false,
    };
  },
  watch: {
    open(newVal) {
      this.isOpen = newVal;
    },
  },
  methods: {
    handleRoute(index) {
      this.$router.push({ name: `week${index + 1}` });
    },
  },
};

import { img_lightbox } from "../assets/js/lightbox.js";
img_lightbox();

import lightbox from "lightbox2";
lightbox.option({
  wrapAround: true,
  albumLabel: "%1 / %2",
});

import { swiper } from "../assets/js/swiper.js";
swiper();
</script>

<style scoped lang="scss">
@import "../assets/scss/layout";
@import "../assets/scss/sidebar-left";
</style>
