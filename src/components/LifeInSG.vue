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
  			<div class="sg-week-04 not-selected"><span>WEEK 04</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-05 not-selected"><span>WEEK 05</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-06 not-selected"><span>WEEK 06</span><img src="../assets/images/right_arrow.png"/></div>
  		</div>
  	</div>
  	<div class="sidebar-left-mobile">
  		<div class="sidebar-left-mobile__menu fade-in-left">
  			<div class="sg-week-01 selected"><span>WEEK 01</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-02 not-selected"><span>WEEK 02</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-03 not-selected"><span>WEEK 03</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-04 not-selected"><span>WEEK 04</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-05 not-selected"><span>WEEK 05</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-06 not-selected"><span>WEEK 06</span><img src="../assets/images/right_arrow.png"/></div>
  		</div>
  	</div>
  	<div class="col-md-9 col-xs-12 invisible-scrollbar">
 			<Week01/>
  		<Week02/>
  		<Week03/>
  		<Week04/>
  		<Week05/>
  		<Week06/>
  	</div>
  </div>
</template>

<script>
import Week01 from "./blog_content/Week01";
import Week02 from "./blog_content/Week02";
import Week03 from "./blog_content/Week03";
import Week04 from "./blog_content/Week04";
import Week05 from "./blog_content/Week05";
import Week06 from "./blog_content/Week06";
import {left_menu} from "../assets/js/life_in_sg.js";
left_menu();

export default {
	name: "LifeInSG",
	components: {
		Week01,
		Week02,
		Week03,
		Week04,
		Week05,
		Week06
	}
};

import {img_lightbox} from "../assets/js/lightbox.js";
img_lightbox();

import lightbox from "lightbox2";
lightbox.option({
  'wrapAround': true,
  'albumLabel':	'%1 / %2',
})
</script>

<style scoped lang="scss">
@import "../assets/scss/layout";
@import "../assets/scss/sidebar-left";
</style>
