<template>
	<div class="my">
		<div class="verify">
			<img src="http://img1.3lian.com/2015/a1/47/d/92.jpg" />
			<div class="loginreg">
				<img src="https://www.sasa.com/public/images/7a/f5/05/1115616d26bb4baa26c55bf0e172d0fd8dca963a.png" />
				<div class="login">
					<span @click="login">登陆</span>
					<span>注册</span>
				</div>
			</div>
				<div class="setting">
					<span><icon name="cog"></icon></span>
					<span><icon name="bell"></icon></span>
				</div>

		</div>
		<ul class="collection">
		</ul>
		<div class="ordering">

		</div>
		<div class="mine">

		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			login(){
				console.log(123)
			}
		}
	}
</script>

<style lang="scss">
	.my {
		width: 100%;
		flex: 1;
		.verify {
			position:relative;
			>img {
				width: 100%;
				height: 4.6875rem;
			}
		}
		.loginreg{
			width: 2.65625rem;
			position: absolute;
			top: 45%;
			left: 50%;
			transform: translate(-50%,-50%);
			.login{
				width:100%;
				margin-top: 0.234375rem;
				display: flex;
				justify-content: space-around;
				span{
					color: #fff;
					width: 50%;
					display: flex;
					justify-content: center;
					font-size:0.46875rem;
				}
				span:nth-of-type(1){
					border-right: 0.03125rem solid #fff;
				}
			}
		}
		.setting{
			width: 2.1875rem;
			display: flex;
			justify-content: space-around;
			position: absolute;
			right: 0.46875rem;
			top: 0.46875rem;
			span{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 0.78125rem;
				height: 0.78125rem;
				background-color: #fff;
				border-radius: 50%;
				svg{
					width: 0.46875rem;
					height: 0.46875rem;
				}
			}
		}
	}
</style>