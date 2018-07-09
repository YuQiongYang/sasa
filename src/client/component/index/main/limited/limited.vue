<template>
	<div class="limited">
		<div class="limited_time">
			<div>
				<span>限时特卖</span>
				<span>9点场</span>
				<span></span>
			</div>
			<span class="more" @click="goLimited">查看更多特卖<icon name="chevron-right"></icon></span>
		</div>
		<ul>
			<li v-for="(items,idx) in $store.state.limited.limitedData" :key="idx" :id="$store.state.limited.limitedData[idx].product_info.goods_id" @click="jumpDetails(idx,$event)">
				<span class="special_time" v-show="specialTime">限时特卖</span>
				<img v-lazy="$store.state.limited.limitedData[idx].product_info.wap_product_image" />
				<div class="goods_details">
					<span class="title">{{$store.state.limited.limitedData[idx].product_info.name}}&nbsp;{{$store.state.limited.limitedData[idx].product_info.productSize}}</span>
					<div class="price">
						<div>
							<span>{{$store.state.limited.limitedData[idx].price.saveprice}}</span>
							<span>￥{{$store.state.limited.limitedData[idx].price.price}}</span>
						</div>
						<del>￥{{$store.state.limited.limitedData[idx].price.mktprice}}</del>
					</div>
					<div class="buy">
						<span class="carts" @click="isjump(idx,$event);
							$store.dispatch('getLimited');
							$store.dispatch('isJump');
							$store.state.limited.addCart = !$store.state.limited.addCart">
							<icon name='shopping-cart'></icon>
						</span>
					</div>
				</div>
			</li>
		</ul>
		<span class="view_more" @click="goLimited">查看更多限时特卖</span>
		<transition name="bounce">
			<span class="addCart" v-if="$store.state.limited.addCart">成功添加到购物车</span>
		</transition>
	</div>
</template>

<script>
	import http from '../../../../lib/httpclient';
	export default {
		data() {
			return {
				specialTime: true
			}
		},
		methods: {
			isjump(i, e) {
				if(this.$store.state.limited.result.isLogin && e.target.tagName == 'path') {
					let currentLi = e.target.parentNode.parentNode.parentNode.parentNode.parentNode;
					for(let i = 0; i < this.$store.state.limited.limitedData.length; i++) {
						if($(currentLi).prop('id') && $(currentLi).prop('id') === this.$store.state.limited.limitedData[i].product_info.goods_id) {
							this.$store.state.limited.good = this.$store.state.limited.limitedData[i];
						}
					}
				}
			},
			jumpDetails(i, e) {
				if(e.target.tagName != 'path') {
					let id = this.$store.state.limited.limitedData[i].product_info.goods_id;
					this.$router.push('details?' + id);
				}
			},
			goLimited() {
				this.$router.push('times')
			}
		},
		mounted() {
			//			this.$store.dispatch('getLimited');
			//			this.$store.dispatch('isJump');
		}
	}
</script>

<style lang="scss">
	.limited {
		.limited_time {
			padding: 0.1875rem 0.234375rem;
			display: flex;
			justify-content: space-between;
			div {
				span:nth-of-type(1) {
					color: #ec3e7d;
				}
			}
			.more {
				color: #aba;
				display: flex;
				justify-content: center;
			}
		}
		ul {
			li {
				padding: 0.3125rem 0;
				display: flex;
				justify-content: space-around;
				border-top: 0.015625rem solid #ccc;
				position: relative;
				.special_time {
					position: absolute;
					top: 0;
					left: 0;
					width: 0.96875rem;
					text-align: center;
					background-color: #ec3e7d;
					color: #fff;
					padding: 0.15625rem;
					box-sizing: content-box;
				}
				img[lazy=loading] {
					width: 4.6875rem;
					height: 4.6875rem;
				}
				img[lazy=loaded] {
					height: 4.6875rem;
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
				.goods_details {
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					width: 4.375rem;
					.title {
						color: #000;
						font-size: 0.40625rem;
					}
					.price {
						height: 1.25rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						div {
							span:nth-of-type(1) {
								background-color: #ec3e7d;
								color: #fff;
								padding: 0.046875rem 0.15625rem;
							}
							span:nth-of-type(2) {
								color: #ec3e7d;
								font-size: 0.4375rem;
								font-weight: 600;
							}
						}
					}
					.buy {
						span {
							display: flex;
							justify-content: center;
							border-radius: 50%;
							width: 0.78125rem;
							height: 0.78125rem;
							float: right;
							background-color: #ec3e7d;
							svg {
								color: #fff;
								width: 0.5625rem;
								height: 0.5625rem;
							}
						}
					}
				}
			}
		}
		.view_more {
			display: flex;
			justify-content: center;
			border: 0.015625rem solid #ddd;
			padding: 15px 0;
		}
		.addCart{
			padding: 0.078125rem;
			border-radius: 0.15625rem;
			position: fixed;
			top: 40%;
			left: 35%;
			background: #333333;
			color: #fff;
			
		}
		.bounce-enter-active {
			animation: bounce-in .8s;
		}
		.bounce-leave-active {
			animation: bounce-in .8s reverse;
		}
		@keyframes bounce-in {
			0% {
				transform: scale(0);
			}
			50% {
				transform: scale(1.5);
			}
			100% {
				transform: scale(1);
			}
		}
	}
</style>