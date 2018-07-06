<template>
	<div class="cartList">
		<div class="head">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left"></icon>
			</div>
			<span>购物车</span>
		</div>
		<div class="main">
			<div class="checked">
				<input type="checkbox" />
			</div>
			<ul>
				<li v-for="(item,idx) in cartList" :data-id="cartList[idx].id">
					<input type="checkbox" />
					<img :src="cartList[idx].img" />
					<div class="goodsright">
						<span>{{cartList[idx].name}}</span>
						<div class="cal">
							<span class="num" @click="addReduce($event)">
								<span class="reduce"> - </span>
							<span>{{cartList[idx].qty}}</span>
							<span class="add"> + </span>
							</span>
							<span class="price">￥{{cartList[idx].price * cartList[idx].qty}}</span>
						</div>
					</div>
				</li>
			</ul>
			<div class="mask" v-show=status>
				<div class="mask_confirm">
					<span>您未登陆，请先  <span @click="login">登陆</span></span>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
	import http from '../../../lib/httpclient';
	export default {
		data() {
			return {
				cartList: this.$store.state.limited.shoppingCart,
				status
			}
		},
		methods: {
			fanhui() {
				this.$router.go(-1);
			},
			login() {
				this.$router.push('login')
			},
			addReduce(e) {
				if(e.target.className == 'add' || e.target.className == 'reduce') {
					let id = $(e.target.parentNode.parentNode.parentNode.parentNode).attr('data-id');
					http.get('/user', {
						id,
						type: e.target.className,
						phone:this.$store.state.user.phone
					}).then((res) => {
						this.cartList = res.allgoods;
						console.log(res)
					})

				}
			}
		},
		mounted() {
			http.post('/user',{phone:this.$store.state.user.phone}).then((res) => {
				this.cartList = res.allgoods.allgoods
				this.status = !res.isLogin;
			})
		}
	}
</script>

<style lang="scss">
	.cartList {
		.head {
			border-bottom: 1px solid #bbb;
			position: relative;
			.fanhui {
				position: absolute;
				width: 0.46875rem;
				top: 50%;
				left: 0.46875rem;
				transform: translateY(-40%);
			}
		}
		.main {
			.checked{
				display: flex;
				align-items: center;
				width: 100%;
				height: 0.78125rem;
				background: #dfdfdf;
				input{
					width: 0.46875rem;
					height: 0.46875rem;
					margin-left: 0.3125rem;
				}
			}
			ul {
				li {
					position:relative;
					padding-left: 0.3125rem;
					input{
						width: 0.390625rem;
						height: 0.390625rem;
						position: absolute;
						top: 50%;
						transform: translateY(-50%);
					}
					display: flex;
					justify-content: space-between;
					border-bottom: 1px solid #ddd;
					height: 3.125rem;
					img {
						width: 30%;
					}
					.goodsright {
						width: 65%;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						padding: 0.3125rem 0.3125rem 0.46875rem;
						>span {
							font-size: 0.4375rem;
						}
						.cal {
							display: flex;
							justify-content: space-between;
							.num {
								display: flex;
								justify-content: space-between;
								width: 1.875rem;
								height: 0.625rem;
								border: 1px solid #ccc;
								>span {
									width: 0.625rem;
									display: flex;
									justify-content: center;
									border-right: 0.015625rem solid #ccc;
								}
								span:nth-of-type(1) {
									color: #EC3E7D;
								}
								span:nth-of-type(3) {
									color: #EC3E7D;
								}
							}
							.price {
								color: #EC3E7D;
							}
						}
					}
				}
			}
			.mask {
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.2);
				position: relative;
				.mask_confirm {
					position: absolute;
					top: 30%;
					left: 50%;
					transform: translate(-50%, -50%);
					width: 4.6875rem;
					height: 2.34375rem;
					background: #fff;
					span {
						display: flex;
						justify-content: center;
						font-size: 0.4375rem;
						line-height: 2.34375rem;
						span {
							color: #EC3E7D;
							font-weight: 700;
						}
					}
				}
			}
		}
	}
</style>