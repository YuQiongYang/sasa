<template>
	<div class="swiper-container">
		<div class="swiper-wrapper">
			<div class="swiper-slide" v-for="(items,idx) in imgs">
				<img :src="items" />
			</div>
		</div>
		<div class="swiper-pagination swiper-pagination-white"></div>
	</div>
</template>

<script>
	import Swiper from 'swiper';
	export default {
		data() {
			return {
				imgs: ["http://cn03alicdn.sasa.com/public/images/73/14/8b/996c00f79ae1683a244191475dc013d84b75f46d.jpg",
					"http://cn04alicdn.sasa.com/public/images/44/c7/16/b939d6adfcac39d40cbbae0b1410868882ad1a5e.jpg",
					"http://cn03alicdn.sasa.com/public/images/7c/82/39/ef22d7eec3717273749feac8d60694370c3264ec.jpg",
					"http://cn04alicdn.sasa.com/public/images/47/42/11/5b83f5923bf6362fc99102c2ecba7049af7ca13a.jpg",
					"http://cn03alicdn.sasa.com/public/images/ca/08/f1/03c405a27c886db0601588323040cd4dd426e5c6.jpg",
					"http://cn02alicdn.sasa.com/public/images/b9/fd/cf/a83bee2e6dec490f64af7fb40abc38084d91fc77.jpg"
				]
			}
		},
		mounted() {
			console.log('mounted', this)
			var swiper = new Swiper('.swiper-container', {
				pagination: {
					el: '.swiper-pagination',
				},
				paginationClickable: true,
				loop: true,
				speed: 600,
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
				onTouchEnd: function() {
					swiper.startAutoplay()
				}
			});
		}

	}
</script>

<style lang="scss">
	.swiper-container {
		width: 100%;
		height: 4.375rem;
		position: relative;
		.swiper-wrapper {
			width: 100%;
			height: 100%;
			.swiper-slide {
				width: 100%;
				position: relative;
				img {
					position: absolute;
					left: 0;
					top: 0;
					width: 100%;
					/*height: 3.28125rem;*/
				}
			}
		}
		.swiper-pagination {
			position: absolute;
			bottom: 0.125rem;
			left: 50%;
			transform: translateX(-50%);
		}
		.swiper-pagination-bullet {
			width: 0.1875rem;
			height: 0.1875rem;
			display: inline-block;
			background: #333;
		}
	}
</style>