<template>
	<div class="lg">
		<div class="head">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left" ></icon>
			</div>
			<span>登陆</span>
			<span @click="reg">注册</span>
		</div>
		
		<div class="user">
			<label>
			<input type="text" placeholder="手机号" id="txt" v-model="phone" @blur="phones" />
			<icon name="times"></icon>
			</label>
			<label>
			<input type="password" placeholder="密码"  id="pwd" v-model="pwd" @blur="pwds"/>
			<span>显示</span>
			</label>
		</div>
		<div class="sure">
		<input type="button" id="btn" value="登陆" @click="jump"/>
		</div>
	</div>
</template>

<script>
	import http from '../../lib/httpclient';
	export default{
		data(){
				return{
					phone:'',
					pwd:''
				}
			},
		methods:{
			fanhui(){
				this.$router.go(-1);
			},
			reg(){
				this.$router.push({name:'reg'})
			},
			phones(){
				let regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
				if(this.phone == '') {
					alert("请输入手机号码")
				} else if(!regPhone.test(this.phone)) {
					alert('手机格式不正确')
				}
			},
			pwds(){
				if(pwd == ''){
					alert('请输入密码')
				}
			},
			jump(){
				let regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
				if(this.phone == '' || this.pwd == '') {
					alert('注册选项不能为空哦')
				}else if(!regPhone.test(this.phone)) {
					alert('手机格式不正确')
				}else{
					let phone = this.phone;
					let pwd = this.pwd;
					http.post('/login', {
						phone,
						pwd
					}).then((res) => {
						let userToken = JSON.parse(window.localStorage.getItem('user'))
						console.log(res)
						if(userToken && res.status) {
							this.$store.state.user.phone = userToken.data.phone;
							this.$router.go(-1);
							window.localStorage.setItem('token', res.data.token);
							this.$store.dispatch('getUsers')
						}else{
							alert('电话或密码错误');
						}
					})
				}
			}
			
		},
		mounted(){
			this.$store.dispatch('getUsers')
		}
	}
	
</script>

<style lang="scss">
	.lg{
		width:100%;
		height:100%;
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		.head{
			width: 100%;
			height: 0.9375rem;
			align-items: center;
			display: flex;
			justify-content: space-between;
			padding: 0 0.3125rem;
			font-size: 0.375rem;
			border-bottom:1px solid #ccc;
			background-color:#fff;
			svg{
				width: 0.5625rem;
				height: 0.5625rem;
			}
			span:nth-of-type(1){
				color:#EC3E7D;
			}
		}
		.user{
			width: 100%;
			margin-top: 0.3125rem;
			display: flex;
			flex-direction: column;
			label{
				width: 100%;
				position: relative;
				input{
					width: 100%;
					height: 1.09375rem;
					border: none;
					font-size: 0.375rem;
					padding: 0 0.3125rem;
				}
				input:nth-of-type(1){
					border-bottom: 1px solid #ccc;
				}
				svg{
					width: 0.40625rem;
					height: 0.40625rem;
					position: absolute;
					right:  0.3125rem;
					top: 50%;
					transform: translateY(-50%);
				}
				span{
					display: flex;
					border: 0.015625rem solid #ccc;
					width: 1.09375rem;
					height: 0.703125rem;
					justify-content: center;
					align-items: center;
					position: absolute;
					right: 0.3125rem;
					top: 50%;
					transform: translateY(-50%);
					border-radius: 0.078125rem;
					background: #f9f9f9;
				}
			}
		}
		.sure{
			display: flex;
			justify-content: center;			
			#btn{
				border: none;
				width: 90%;
				height: 0.9375rem;
				margin-top: 0.9375rem;
				font-size: 0.4375rem;
				color: #fff;
				background:#EC3E7D;
			}
		}
	}
</style>