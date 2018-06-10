<template>
	<div class="special">
		<ul>
			<li v-for="img in imgs">
				<img v-lazy="img" />
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				imgs:["http://cdnec.sasa.com/public/promoImgs/2018/05/201805-promo2/promo2a-29.jpg","http://cdnec.sasa.com/public/promoImgs/2018/05/201805-promo2/promo2b-25.jpg",
				"http://cdnec.sasa.com/public/promoImgs/2018/05/201805-promo2/promo2c-25.jpg","http://cn04alicdn.sasa.com/public/images/9b/06/13/778d367237daf766e5d0e37573e09494cec30d92.jpg?1526893139#w",
				"http://cn02alicdn.sasa.com/public/images/16/86/b7/ed89d88056a21dcb709d714879f0ed3bf4912600.jpg?1526893168#w","http://cn04alicdn.sasa.com/public/images/b5/bd/f8/3eee08013b81459f11e44a2616f83eef8cbc644b.jpg?1526893257#w",
				"http://cn04alicdn.sasa.com/public/images/85/83/85/01b656893b3548ed4d5a1bac36a930420c6cb8bd.jpg?1527499473#w","http://cn02alicdn.sasa.com/public/images/53/e4/d0/81fb4fdaac81b01f5a86961c949a011de8fc9765.jpg?1527499698#w",
				"http://cn04alicdn.sasa.com/public/images/90/f4/47/58ba6f7ff622f86d40aab6659dea1ee01ae8c17d.jpg?1526893405#w","http://cn02alicdn.sasa.com/public/images/60/b7/a1/ff30ec0c5ba1625c9f8e411e2c3b8ae3f46ec4c5.jpg?1527499975#w",
				"http://cn02alicdn.sasa.com/public/images/71/67/83/8d81faaeb67ef1fc7d25e30699ef25b751f98962.jpg?1527500169#w"]
			}
		}
	}
</script>

<style lang="scss">
	.special{
		width: 100%;
		ul{
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			li{
				img{
					width: 100%;
				}
				img[lazy=loading] {
					width: 100%;
				}
				img[lazy=loaded] {
					width: 100%;
					animation: fade 0.5s;
				}
				@keyframes fade {
					0% {
						opacity: 0;
					}
					100% {
						opacity: 1;
					}
				}
			}
		}
	}
</style>