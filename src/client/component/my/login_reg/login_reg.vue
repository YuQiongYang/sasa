<template>
	<div class="my">
		<div class="verify">
			<img src="http://img2.3lian.com/2014/f6/104/d/49.jpg" />
			<div class="loginreg" v-show="this.$store.state.user.show">
				<!--<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1530781468572&di=41440f502b6da644c999d1cfcd5778b2&imgtype=0&src=http%3A%2F%2Fcbu01.alicdn.com%2Fimg%2Fibank%2F2015%2F374%2F439%2F2178934473_1158792679.jpg" />-->
				<div class="login">
					<span @click="login">登陆</span>
					<span @click="reg">注册</span>
				</div>
			</div>
			<div class="loging" v-show="this.$store.state.user.unshow ">
				<img src="http://bpic.588ku.com/element_pic/01/48/84/79574442ca00dc4.jpg" />
				<div class="login">
					<span>{{this.$store.state.user.phone}}</span>
				</div>
			</div>
				<div class="setting">
					<span @click="setting"><icon name="cog"></icon></span>
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
				this.$router.push({name:'login'})
			},
			reg(){
				this.$router.push({name:'reg'})
			},
			setting(){
				this.$router.push({name:'setting'})
			}
		},
		mounted(){
//			console.log(this.$store.state.user)			
			this.$store.dispatch('getUsers')
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
			img{
				width: 3.125rem;
				border-radius: 0.3125rem;
			}
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
		.loging{
			width: 2.65625rem;
			position: absolute;
			top: 46%;
			left: 50%;
			transform: translate(-50%,-50%);
			img{
				width: 100%;
				border-radius: 50%;
			}
			.login{
				width:100%;
				margin-top: 0.15625rem;
				display: flex;
				justify-content: space-around;
				span{
					color: #fff;
					width: 50%;
					display: flex;
					justify-content: center;
					font-size:0.46875rem;
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