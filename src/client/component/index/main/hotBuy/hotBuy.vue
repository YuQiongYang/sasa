<template>
	<div class="hotBuy">
		<span class="hot">热卖单品</span>
		<ul class="hot_list" :class="$store.state.scroll.searchBarFixed == true ? 'isFixed' :''">
			<li v-for="(obj,idx) in lists" :key="obj.name" @click="change(obj,idx)">
				<span :class="{'active':index === idx}">{{obj.name}}</span>
			</li>
		</ul>
		<ul class="hot_goods">
			<li v-for="(obj,idx) in $store.state.hotBuy.hotData">
				<img v-lazy="$store.state.hotBuy.hotData[idx].wap_product_image" />
				<div class="hot_details">
					<div class="name">
						<span>{{$store.state.hotBuy.hotData[idx].name}}</span>
						<span>{{$store.state.hotBuy.hotData[idx].productSize}}</span>
					</div>
					<div class="price">
						<span>{{$store.state.hotBuy.hotData[idx].price.price}}</span>
						<del>{{$store.state.hotBuy.hotData[idx].price.mktprice}}</del>
						<span>{{$store.state.hotBuy.hotData[idx].price.saveprice}}</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	import http from '../../../../lib/httpclient';
	export default {
		data() {
			return {
				lists: [{
					name: "销售",
					type: "product_id"
				}, {
					name: "人气",
					type: "buy_count"
				}, {
					name: "评分",
					type: "comments_count"
				}, {
					name: "价格↓",
					type: "price_up"
				}, {
					name: "最新",
					type: "ordernum"
				}],
				index: 0
			}
		},
		methods: {
			change(obj, idx) {
				this.index = idx;
				this.$store.state.hotBuy.params.type = obj.type;
				this.$store.dispatch('getdata');
			}
			
		},
		mounted() {
			http.getCt('/lipstick', {
				type: 'product_id'
			}).then((res) => {
				this.$store.state.hotBuy.hotData = res.data
			})
		}
	}
</script>

<style lang="scss">
	.hotBuy {
		.hot {
			color: #EC3E7D;
			font-size: 0.4375rem;
			height: 0.859375rem;
			display: flex;
			align-items: center;
			margin-left: 0.3125rem;
		}
		.hot_list {
			width: 100%;
			display: flex;
			justify-content: space-around;
			border-top: 0.015625rem solid #ccc;
			background-color: #fff;
			
			span {
				display: flex;
				height: 0.9375rem;
				align-content: center;
				padding: 0.15625rem 0.546875rem;
			}
			.active {
				color: #EC3E7D;
			}
		}
		.isFixed{
			width: 100%;
			position: fixed;
			display: flex;
			justify-content: space-around;
			top: 1.09375rem;
			left: 0;
			background-color: #fff;
			border-top: 0.015625rem solid #ccc;
			border-bottom: 0.015625rem solid #f5f5f5;
		}
		.hot_goods {
			display: flex;
			flex-wrap: wrap;
			background: #f3f3f3;
			justify-content: space-around;
			padding: 0.15625rem 0;
			li {
				width: 48%;
				background-color: #fff;
				display: flex;
				align-items: center;
				justify-content: space-between;
				flex-direction: column;
				margin-bottom: 0.15625rem;
				img {
					width: 3.90625rem;
				}
				.hot_details {
					display: flex;
					flex-direction: column;
					padding: 0.078125rem;
					.name {
						margin-bottom: 0.15625rem;
						span {
							font-size: 0.375rem;
						}
					}
					.price {
						padding: 0 0 0.15625rem 0;
						span:nth-of-type(1) {
							color: #EC3E7D;
							font-size: 0.375rem;
						}
						del {
							font-size: 0.28125rem;
						}
						span:nth-of-type(2) {
							color: goldenrod;
							font-size: 0.34375rem;
						}
					}
				}
			}
		}
	}
</style>