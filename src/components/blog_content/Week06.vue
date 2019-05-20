<template>
	<div id="sg-week-06" class="content" style="display: none">
		<div class="content__title">
			ArtScience Museum and the Third CIP<img src="../../assets/images/vertical_bars_sg.png"/>
		</div>
		<div class="content__date">
			2019/02/25 ~ 2019/03/03
		</div>
		<div class="content__content">
			<div class="content__content--text">
				After a lazy, don't-want-to-go-out weekend, I knew I'll have to go out into the sunlight or I'll definitely rot in the dorm. So after the class in Tuesday, I forced myself out of my room, heading to the ArtScience Museum. I bought the all-pass ticket, which allowed me to see all three exhibits. 
			</div>
			<div class="content__content--image horizontal-single">
				<div class="horizontal-single__frame img_lightbox">
					<a href="" data-lightbox="week06-1"><img src="../../assets/images/week06/museum.jpg"/></a>
				</div>
				<div class="horizontal-single__annotation">The ArtScience Museum.</div>
			</div>
			<div class="content__content--text">
				The first exhibit was FUTURE WORLD: WHERE ART MEETS SCIENCE. This is a permenant exhibit that is suitable for all ages. There are a lot of interactive devices and facilities that allow you to play with lights and sounds. My favorite section was "Space". There were thousands little light bulbs hanged to the ceiling and covered all the sapce from the ceiling to the floor. The color of the light bulbs changed along with the dreamy music. The walls, the ceiling and the floor were all covered by mirrors, giving you the illusion that you're standing in the spaceless universe. 
				<br/><br/>
				Next exhibit was called ALL POSSIBLE PATHS: RICHARD FEYNMAN'S CURIOUS LIFE. Feynman was one of the most influential physicists of the 20th cenury. He was know for integral formulation of quantum mechanics, the theory of quantum electrodynamics, etc. His findings won him a Nobel Prize in Physics in 1965. The exhibits show how Feynman's curiosity and his unconventional thinking led him to differnet life's paths. Despite his great contribution in science, he also spent lots of time pursuing art and music as personal interest. We should never limit ourselves to only one path in our lives. Just like Feynman said, "I don't know anything but I do know that everything is interesting if you go into it deeply enough."
			</div>
			<div class="quote">
				<div class="quote__text">
					<span>" </span>We are at the very beginning of time for the human race. Our responsibility is to do what we can, learn what we can, improve the solutions, and pass them on.<span> "</span>
				</div>
				<div class="quote__name">
					——— Richard Feynman
				</div>
			</div>
			<div class="content__content--text">
				The last exhibit was MINIMALISM: SPACE, LIGHT, OBJECT. The exhibit included painting, sculpture, installation and music. To be honest, I'm not an art person, so I wasn't really moved by the art works. But I did enjoy the unique spacial structure of the building and the art spirit. There was a free exhibition at the top level of the museum. You can lie on the floor while enjoying a short film about nature projected on the tall wall of exhibit hall.
			</div>
			<div class="content__content--image">
				<div class="desktop-img horizontal-double">
					<div class="horizontal-double__frame1 inline-block img_lightbox">
						<a href="" data-lightbox="week06-2"><img src="../../assets/images/week06/art1.jpg"/></a>
					</div>
					<div class="horizontal-double__frame2 inline-block img_lightbox">
						<a href="" data-lightbox="week06-2"><img src="../../assets/images/week06/art2.jpg"/></a>
					</div>
					<div class="horizontal-double__annotation">Some art works of MINIMALISM: SPACE, LIGHT, OBJECT.</div>
				</div>
				<div class="mobile-img swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide"><img src="../../assets/images/week06/art1.jpg"/></div>
						<div class="swiper-slide"><img src="../../assets/images/week06/art2.jpg"/></div>
					</div>
					<div class="swiper-button-next"></div>
    			<div class="swiper-button-prev"></div>
				</div>
			</div>
			<div class="content__content--text">
				Saturday is the third CIP event. We went to All Saints Home to help with the birthday celebration event. All Saints Home is a Voluntary Welfare Organisation (VWO) that provides comprehensive and professional eldercare services to the ages of all backgrounds. Most of the residents there are elderly people. Some of them are sill in good condition, but many of them should move in wheelchairs or lie in bed all time. It's really touching that there are a group of people who are willing to devote their time every weekend to accompany the elders. After the birthday celebration event, we separated into two groups and sang songs to the residents there. Most Chinese and Hokkian songs in the song book are popular songs twenty years ago in Taiwan, so I could sing alone most of the time. It was a lot of fun!
			</div>

		</div>
	</div>
</template>

<script>
export default {
	name: "Week06",
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/layout";
@import "../../assets/scss/content";
@import "../../assets/scss/swiper";

.quote {
	font-size: 24px;
	color: $darksalmon;
	font-weight: bold;
	line-height: 40px;
	margin-bottom: 40px;
	@media #{$mobile} {
		line-height: 35px;
	}

	&__text {
		padding: 40px 70px 0px 70px;
		font-style: italic;
		@media #{$mobile} {
			padding: 40px 10px 0px 10px;
	  }

		span {
			font-size: 45px;
			line-height: 0px;
			color: $indianred;
		}
	}

	&__name {
		font-weight: 900;
		text-align: right;
		color: $indianred;
	}
}
</style>
