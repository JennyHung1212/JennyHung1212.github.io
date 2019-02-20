<template>
  <div class="site-container">
    <header class="header-container">
      <img src="./assets/images/logo.png"/>
    </header>
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
