<template>
	<div class="jdetails">
		<div class="jhead">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left"></icon>
			</div>
			<span>{{$store.state.limited.good.name}}</span>
			<icon name="align-justify"></icon>
		</div>
		<div class="main">
			<div class="jimage">
				<img :src="$store.state.limited.good.product_image"/>
			</div>
			<div class="jtitle">
				<span>{{$store.state.limited.good.brief}}</span>
			</div>
			<div class="price">
				<span>￥{{$store.state.limited.good.price.price}}</span>
				<del>￥{{$store.state.limited.good.price.mktprice}}</del>
				<span>￥{{$store.state.limited.good.price.saveprice}}</span>
			</div>
			<div class="num">
				<span>已售{{$store.state.limited.good.buy_m_count}}件</span>
			</div>
		</div>
		<div class="settlement">
			<span>
				<icon name="heart"></icon>
				收藏
			</span>
			<span @click="goCart">
				<icon name="shopping-cart"></icon>
				购物车
			</span>
			<span class="cart" 
				@click="$store.dispatch('isJump');
				isJump($event);
				$store.state.limited.addCart = !$store.state.limited.addCart">加入购物车</span>
		</div>
		<transition name="bounce">
			<span class="addCart" v-if="$store.state.limited.addCart">成功添加到购物车</span>
		</transition>
	</div>
</template>

<script>
	export default {
		methods: {
			fanhui() {
				this.$router.go(-1);
			},
			goCart(){
				this.$router.push('cart');
			},
			isJump(e) {
				if(this.$store.state.limited.result.isLogin && e.target.className == 'cart') {
//					console.log(this.$store.state.limited.good)
				}
			}
		},
		beforeMount() {
			this.$store.dispatch('getLimited');
			this.$store.dispatch('getdata');
		},
		mounted() {
			this.$store.state.limited.id = (window.location.hash).slice(10);
		}
	}
</script>

<style lang="scss">
	.jdetails {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.jhead {
			/*width: 100%;*/
			height: 0.9375rem;
			align-items: center;
			display: flex;
			justify-content: space-between;
			padding: 0 0.3125rem;
			font-size: 0.375rem;
			border-bottom: 1px solid #ccc;
			background-color: #fff;
			svg {
				width: 0.5625rem;
				height: 0.5625rem;
			}
			span:nth-of-type(1) {
				display: flex;
				color: #EC3E7D;
			}
		}
		.main {
			flex: 1;
			.jimage {
				img {
					width: 100%;
				}
			}
			.jtitle {
				display: flex;
				/*width: 100%;*/
				padding: 0 0.234375rem;
				background: #f1f1f1;
				line-height: 0.65625rem;
				display: block;
				font-family: PingFangSC-Regular;
				letter-spacing: 0;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: normal;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				/*规定最多显示两行*/
				>span {
					font-size: 0.4375rem;
				}
			}
			.price {
				>span:nth-of-type(1) {
					color: #EC3E7D;
					font-size: 0.625rem;
				}
				>del {
					font-size: 0.375rem;
					color: #ccc;
				}
				>span:nth-of-type(2) {
					font-size: 0.375rem;
					background: #EC3E7D;
					color: #fff;
				}
			}
			.num {
				>span {
					font-size: 0.46875rem;
				}
			}
		}
		.settlement {
			display: flex;
			height: 1.40625rem;
			justify-content: space-between;
			background: #333;
			color: #fff;
			span {
				font-size: 0.46875rem;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			span:nth-child(1) {
				width: 20%;
				display: flex;
				flex-direction: column;
				border-right: 1px solid #fff;
			}
			span:nth-child(2) {
				width: 20%;
				display: flex;
				flex-direction: column;
			}
			span:nth-child(3) {
				width: 60%;
				background: #EC3E7D;
			}
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