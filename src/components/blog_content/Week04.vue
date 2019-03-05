<template>
	<div id="sg-week-04" class="content" style="display: none">
		<div class="content__title">
			The Zoo, the Beach and the Makan Felloship<img src="../../assets/images/vertical_bars_sg.png"/>
		</div>
		<div class="content__date">
			2019/02/11 ~ 2019/02/17
		</div>
		<div class="content__content">
			<div class="content__content--text">
				This week, two of my roommates in Taiwan came to Singapore! Me, my two roommates and the other girl who was our classmates and now study in SMU had brunch together on Wednesday morning. We ate at Bread Street in The Shoppes at Marina Bay Sands, which is a resturant opened by Gordon Ramsay. If you have watched the Hell's Kitchen before, then you will definitely know this famous chef. He is famous for his superb cooking skills and his sharp personality. The food was extraordinary but really expensive. So I think this would be my first and the last time to dine in this high-grade resturant.
			</div>
			<div class="content__content--image mixed-triple">
				<div class="inline-block">
					<div class="mixed-triple__frame1 img_lightbox">
  					<a href="" data-lightbox="week04-1"><img src="../../assets/images/week04/signboard.jpg"/></a>
  				</div>
				</div>
				<div class="inline-block">
					<div class="mixed-triple__frame2 img_lightbox">
  					<a href="" data-lightbox="week04-1"><img src="../../assets/images/week04/appetizer.jpg"/></a>
  				</div>
  				<div class="mixed-triple__frame3 img_lightbox">
  					<a href="" data-lightbox="week04-1"><img src="../../assets/images/week04/main.jpg"/></a>
  				</div>
				</div>
				<div class="mixed-triple__annotation">1) Gordon Ramsay. 2) Appetizers 3) Main Dishes. The duck leg was especially good.</div>
			</div>
			<div class="content__content--text">
				After brunch, my and the other girl went to Singapore Zoo together. I have to say that the ticket is way expensive compared to Taipei Zoo. However, the zoo didn't let us down at all. The park is well organized and the diversity of the animals is high. We spent the whole afternnon in there and had a really good time.
			</div>
			<div class="content__content--image horizontal-single">
				<div class="horizontal-single__frame img_lightbox">
					<a href="" data-lightbox="week04-2"><img src="../../assets/images/week04/zoo.jpg"/></a>
				</div>
				<div class="horizontal-single__annotation">Singapore Zoo.</div>
			</div>
			<div class="content__content--text">
				Two of my favorite spots is Elephants of Asia and Fragile Forest. There was a elephant presentation at 3:30 pm. We got there just on time so we didn't had seats to sit. The elephants grabbed fruits with their long noses and rolled in the water. So cute!! If you want to go there sometimes, remember to get to the spot a little earlier then the starting time, so that you can have a close observation of the cute elephants. The other spot I really loved is Fragile Forest. There are many kinds of birds, flying fox, butterflies and others animals in that area. The animals there were not locked up in a restricted area respectively. They were actually wandering and flying around us! We are so used to the lifeless concrete jungle we live in, so it was REALLY fun and exciting to be surrounded by lots of lively animals.
			</div>
			<div class="content__content--image mixed-triple">
				<div class="inline-block">
					<div class="mixed-triple__frame1 img_lightbox">
  					<a href="" data-lightbox="week04-3"><img src="../../assets/images/week04/blue_bird.jpg"/></a>
  				</div>
				</div>
				<div class="inline-block">
					<div class="mixed-triple__frame2 img_lightbox">
  					<a href="" data-lightbox="week04-3"><img src="../../assets/images/week04/lizard.jpg"/></a>
  				</div>
  				<div class="mixed-triple__frame3 img_lightbox">
  					<a href="" data-lightbox="week04-3"><img src="../../assets/images/week04/largest_flower.jpg"/></a>
  				</div>
				</div>
				<div class="mixed-triple__annotation">1) Common Crowned Pigeon. 2) Inguana (forgot which type) 3) The worlds's largest flower!.</div>
			</div>
			<div class="content__content--text">
				After the zoo, we went to 1-Altitude, the highest alfresco bar in the world and one of Singapore’s best rooftop bars with a spectacular 360-degree view of the city. It was the girl's night, so girls don't have to pay the admission fee. We went up there, waiting for the sun to set, and came down sober without a drop of alcohol. The view was amazing, and the life music really made you want to dance along with it.
			</div>
			<div class="content__content--image horizontal-double">
				<div class="horizontal-double__frame1 inline-block img_lightbox">
					<a href="" data-lightbox="week04-4"><img src="../../assets/images/week04/day.jpg"/></a>
				</div>
				<div class="horizontal-double__frame2 inline-block img_lightbox">
					<a href="" data-lightbox="week04-4"><img src="../../assets/images/week04/night.jpg"/></a>
				</div>
				<div class="horizontal-double__annotation">1) The view of Marina Bay Sends from 1-Altitude. 2) The night view from 1-Altitude.</div>
			</div>
			<div class="content__content--text">
				Let's directly jump to Saturday! I woke up early and joined the second CIP event of TFI LEaRN Programme. It was the Makan Felloship held by YMCA Singapre. Around 60 elders joined the event. We helped to decorate the room, chat with the elders and play fun games with them. The two old ladies sit besides me speak 福建話, which is a dialect in Singapre, and is quite similar to Taiwanese. I'm really glad that Taiwanese come in handy while I'm far away from Taiwan.
			</div>
			<div class="content__content--image horizontal-single">
				<div class="horizontal-single__frame img_lightbox">
					<a href="" data-lightbox="week04-5"><img src="../../assets/images/week04/yusheng.jpg"/></a>
				</div>
				<div class="horizontal-single__annotation">We ate yusheng and celebrated Chinese New Year together.</div>
			</div>
			<div class="content__content--text">
				After the CIP event, I went to Sentosa to play beach volleyball. This is my first volleyball play after I dropped out off the volleyball team of my department in NTU. So I was rusty and didn't play quite well. However the weather is really nice, and others players are friendly. I wore out after playing for two hours. I think it's because I haven't do intense exercise and slept very little the day before. Maybe next day I will join them again with my full energy!
			</div>
		</div>
	</div>
</template>

<script>
import {img_lightbox} from "../../assets/js/lightbox.js";
img_lightbox();

import lightbox from "lightbox2";
lightbox.option({
  'wrapAround': true,
  'albumLabel':	'%1 / %2',
  'disableScrolling': true,
  
})

export default {
	name: "Week04",
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/layout";
@import "../../assets/scss/content";
</style>