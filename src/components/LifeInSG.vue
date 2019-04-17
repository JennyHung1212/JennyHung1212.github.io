<template>
  <div class="row">
  	<div class="col-md-3 col-sm-3 col-xs-12 sidebar-left">
  		<div class="sidebar-left__title">
  			<img src="../assets/images/life_in_sg.png" alt="Life in Singapore"/>
  		</div>
  		<div class="sidebar-left__menu">
  			<div class="sg-week-01 selected"><span>Week One</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-02 not-selected"><span>Week Two</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-03 not-selected"><span>Week Three</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-04 not-selected"><span>Week Four</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-05 not-selected"><span>Week Five</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-06 not-selected"><span>Week Six</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-07 not-selected"><span>Week Seven</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-08 not-selected"><span>Week Eight</span><img src="../assets/images/right_arrow.png"/></div>
  			<div class="sg-week-09 not-selected"><span>Week Nine</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-10 not-selected"><span>Week Ten</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-11 not-selected"><span>Week Eleven</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-12 not-selected"><span>Week Twelve</span><img src="../assets/images/right_arrow.png"/></div>
  		</div>
  	</div>
  	<div class="sidebar-left-mobile">
  		<div class="sidebar-left-mobile__menu fade-in-left">
  			<div class="sg-week-01 selected"><span>Week One</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-02 not-selected"><span>Week Two</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-03 not-selected"><span>Week Three</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-04 not-selected"><span>Week Four</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-05 not-selected"><span>Week Five</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-06 not-selected"><span>Week Six</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-07 not-selected"><span>Week Seven</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-08 not-selected"><span>Week Eight</span><img src="../assets/images/right_arrow.png"/></div>
				<div class="sg-week-09 not-selected"><span>Week Nine</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-10 not-selected"><span>Week Ten</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-11 not-selected"><span>Week Eleven</span><img src="../assets/images/right_arrow.png"/></div>
        <div class="sg-week-12 not-selected"><span>Week Twelve</span><img src="../assets/images/right_arrow.png"/></div>
  		</div>
  	</div>
  	<div class="col-md-9 col-sm-9 col-xs-12 invisible-scrollbar">
 			<Week01/>
  		<Week02/>
  		<Week03/>
  		<Week04/>
  		<Week05/>
  		<Week06/>
  		<Week07/>
  		<Week08/>
  		<Week09/>
      <Week10/>
      <Week11/>
      <Week12/>
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
import Week07 from "./blog_content/Week07";
import Week08 from "./blog_content/Week08";
import Week09 from "./blog_content/Week09";
import Week10 from "./blog_content/Week10";
import Week11 from "./blog_content/Week11";
import Week12 from "./blog_content/Week12";

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
		Week06,
		Week07,
		Week08,
		Week09,
    Week10,
    Week11,
    Week12
	}
};

import {img_lightbox} from "../assets/js/lightbox.js";
img_lightbox();

import lightbox from "lightbox2";
lightbox.option({
  'wrapAround': true,
  'albumLabel':	'%1 / %2',
})

import {swiper} from "../assets/js/swiper.js";
swiper();

</script>

<style scoped lang="scss">
@import "../assets/scss/layout";
@import "../assets/scss/sidebar-left";
</style>
