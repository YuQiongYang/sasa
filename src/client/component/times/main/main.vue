<template>
	<div class="limited_time">
		<ul class="shops">
			<li v-for="(obj,idx) in $store.state.limited.facial">
			<img v-lazy="$store.state.limited.facial[idx].product_info.wap_product_image" />
				<div class="goods_details">
					<span class="title">{{$store.state.limited.facial[idx].product_info.name}}&nbsp;{{$store.state.limited.facial[idx].product_info.productSize}}</span>
					<div class="price">
						<div>
							<span>{{$store.state.limited.facial[idx].price.saveprice}}</span>
							<span>￥{{$store.state.limited.facial[idx].price.price}}</span>
						</div>
						<del>￥{{$store.state.limited.facial[idx].price.mktprice}}</del>
					</div>
					<div class="buy">
						<span>
							<icon name='shopping-cart'></icon>
						</span>
					</div>
				</div>	
				
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		mounted(){
			console.log(this.$store.state.limited)
		}
	}
</script>

<style lang="scss">
	.limited_time {
		flex: 1;
		overflow-x: hidden;
		.shops {
			display: flex;
			flex-direction: column;
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
					.price{
						height: 1.25rem;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						div{
							span:nth-of-type(1){
								background-color: #ec3e7d;
								color: #fff;
								padding: 0.046875rem 0.15625rem;
							}
							span:nth-of-type(2){
								color: #ec3e7d;
								font-size: 0.4375rem;
								font-weight: 600;
							}
						}
					}
					.buy{
						span{
							display: flex;
							justify-content: center;
							border-radius: 50%;
							width: 0.78125rem;
							height: 0.78125rem;
							float: right;
							background-color:#ec3e7d;
							svg {
								color: #fff;
								width: 0.53125rem;
								height: 0.53125rem;
								
							}
						}
					}
				}
				}
				}
	}
</style>