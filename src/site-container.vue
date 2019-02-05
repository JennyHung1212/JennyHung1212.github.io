<template>
  <div class="site-container">
    <header class="header-container">
      <img src="./assets/images/logo.png">
    </header>
    <router-view/>
    <footer class="footer-container">
      
    </footer>
  </div>
</template>

<script>
export default {
  name: "SiteContainer"
};
</script>

<style lang=scss>
@import "assets/scss/layout";
.site-container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $content-color;
  margin-top: 60px;
}
.header-container {
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: right;

  img {
    height: 50px;
    margin-right: 50px;
    margin-top: 15px;
  }
}

</style>
