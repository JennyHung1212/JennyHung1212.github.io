<template>
  <div class="site-container">
    <header class="header-container">
      <img src="./assets/images/logo.png"/>
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
  margin-top: 70px;
}

.header-container {
  background-color: white;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  text-align: right;
  @media #{$mobile} {
    text-align: center;
  }

  img {
    height: 50px;
    margin-right: 50px;
    margin-top: 15px;

    @media #{$mobile} {
      margin-right: 0;
    }
  }
}

.row {
  max-height: calc(100vh-70px);
  overflow-y: hidden;
  @media #{$mobile} {
    max-height: unset;
    overflow-y: scroll;
  }
}

.content {
  overflow-y: scroll;
}

</style>
