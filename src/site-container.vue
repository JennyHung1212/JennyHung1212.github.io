<template>
  <div class="site-container">
    <header class="header-container">
      <img src="./assets/images/logo.png"/>
      <div class="header-container__menu">
        <span class="menu-title">LIFE in SG</span>
        <span class="menu-title">RESUME</span>
      </div>
    </header>
    <div class="header-container__left-toggle" id="toggle1">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div class="header-container__right-toggle" id="toggle2">
      <span class="top"></span>
      <span class="middle"></span>
      <span class="bottom"></span>
    </div>
    <div class="sidebar-right-mobile">
      <div class="sidebar-right-mobile__menu fade-in-right">
        <div><span>LIFE in SG</span></div>
        <div><span>RESUME</span></div>
      </div>
    </div>
    <router-view/>
    <footer class="footer-container">
      <div class="footer-container__top">
        <img src="./assets/images/up.png">
      </div>
      <div class="footer-container__progress">
        <div class="footer-container__progress--bar"></div>
      </div>
    </footer>
  </div>
</template>

<script>
import {left_toggle} from "./assets/js/header.js";
left_toggle();

import {progress_bar, scroll_top} from "./assets/js/footer.js";
progress_bar();
scroll_top();

export default {
  name: "SiteContainer"
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
  padding-top: 70px;
}

.row {
  max-height: calc(100vh-80px);
  overflow-y: hidden;
  @media #{$mobile} {
    max-height: unset;
    overflow-y: scroll;
  }
}
</style>
