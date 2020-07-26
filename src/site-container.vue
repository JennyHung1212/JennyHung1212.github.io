<template>
  <div class="site-container">
    <header class="header-container">
      <img v-lazy="'./assets/images/logo.png'" />
      <div class="header-container__menu">
        <span class="menu-title">LIFE in SG</span>

        <a href="http://jennyhung-cv.net/">
          <span class="menu-title">RESUME</span>
        </a>
      </div>
    </header>
    <div
      class="header-container__left-toggle"
      id="toggle1"
      @click="isActiveLeft=!isActiveLeft, isOpenLeft=!isOpenLeft"
      :class="{active: isActiveLeft}"
    >
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div
      class="header-container__right-toggle"
      id="toggle2"
      @click="isActiveRight=!isActiveRight, isOpenRight=!isOpenRight"
      :class="{active: isActiveRight}"
    >
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div class="sidebar-right-mobile" :class="{open: isOpenRight}">
      <div class="sidebar-right-mobile__menu fade-in-right">
        <div>
          <span>LIFE in SG</span>
        </div>
        <div>
          <a href="http://jennyhung-cv.net/">
            <span>RESUME</span>
          </a>
        </div>
      </div>
    </div>
    <router-view :open="isOpenLeft" @close-menu="isActiveLeft=false, isOpenLeft=false" />
    <footer class="footer-container">
      <div class="footer-container__top">
        <img v-lazy="'./assets/images/up.png'" />
      </div>
      <div class="footer-container__progress">
        <div class="footer-container__progress--bar"></div>
      </div>
    </footer>
  </div>
</template>

<script>
import { progress_bar, scroll_top } from "./assets/js/footer.js";
progress_bar();
scroll_top();

export default {
  name: "SiteContainer",
  data() {
    return {
      isActiveLeft: false,
      isActiveRight: false,
      isOpenLeft: false,
      isOpenRight: false,
    };
  },
};
</script>

<style lang=scss>
@import "assets/scss/layout";
@import "assets/scss/header";
@import "assets/scss/footer";
@import "assets/scss/sidebar-right";
.site-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $content-color;
  padding-top: 80px;
}

.row {
  max-height: calc(100vh - 80px);
  overflow-y: hidden;

  @media #{$mobile} {
    max-height: unset;
    overflow-y: scroll;
  }
}
</style>
