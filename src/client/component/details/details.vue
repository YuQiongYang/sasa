<template>
	<div class="jdetails">
		<div class="jhead">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left"></icon>
			</div>
			<span>{{$store.state.limited.good.product_info.name}}</span>
			<icon name="align-justify"></icon>
		</div>
		<div class="main">
			<div class="jimage">
				<img :src="$store.state.limited.good.product_info.product_image"/>
			</div>
			<div class="jtitle">
				<span>{{$store.state.limited.good.product_info.brief}}</span>
			</div>
			<div class="price">
				<span>￥{{$store.state.limited.good.price.price}}</span>
				<del>￥{{$store.state.limited.good.price.mktprice}}</del>
				<span>￥{{$store.state.limited.good.price.saveprice}}</span>
			</div>
			<div class="num">
				<span>已售{{$store.state.limited.good.product_info.buy_m_count}}件</span>
			</div>
		</div>
		<div class="settlement">
			<span>
				<icon name="heart"></icon>
				收藏
			</span>
			<span>
				<icon name="shopping-cart"></icon>
				购物车
			</span>
			<span class="cart" @click="$store.dispatch('isJump');isJump($event)">加入购物车</span>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			fanhui() {
				this.$router.go(-1);
			},
			isJump(e) {
				if(this.$store.state.limited.result.isLogin && e.target.className == 'cart') {
					console.log(this.$store.state.limited.good)
					this.$store.dispatch('getcartList')
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
		/*width: 100%;*/
		height: 100%;
		display: flex;
		flex-direction: column;
		/*justify-content: space-between;*/
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
			height: 100%;
			overflow-x: hidden;
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
	}
</style>