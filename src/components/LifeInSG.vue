<template>
  <div class="row">
  	<div class="col-md-3 col-xs-12 sidebar-left">
  		<div class="sidebar-left__title">
  			<img src="../assets/images/life_in_sg.png" alt="Life in Singapore"/>
  		</div>
  		<div class="sidebar-left__menu">
  			<div class="sg-week-01 selected"><span>WEEK 01</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-02 not-selected"><span>WEEK 02</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-03 not-selected"><span>WEEK 03</span><img src="../assets/images/right_arrow.png"/></div>
  		</div>
  	</div>
  	<div class="col-md-9 col-xs-12 invisible-scrollbar">
 			<Week01/>
  		<Week02/>
  		<Week03/>
  	</div>
  </div>
</template>

<script>
import Week01 from "./blog_content/Week01";
import Week02 from "./blog_content/Week02";
import Week03 from "./blog_content/Week03";
import {left_menu} from "../assets/js/life_in_sg.js";
left_menu();

export default {
	name: "LifeInSG",
	components: {
		Week01,
		Week02,
		Week03
	}
};
</script>

<style scoped lang="scss">
@import "../assets/scss/layout";
@import "../assets/scss/sidebar-left";
</style>
