<template>
	<div class="register">
		<div class="head">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left"></icon>
			</div>
			<span>注册</span>
		</div>
		<div class="user">
			<label>
			<input type="text" placeholder="请输入手机号码" id="txt" v-model="phone" @blur="phones"/>
			</label>
			<label>
			<input type="password" placeholder="请输入密码" id="pwd" v-model="pwds"/>
			<!--<span @click="shows">显示</span>-->
			</label>
			<label>
			<input type="password" placeholder="请再次输入密码" id="pwd_again" v-model="pwdAgain" @blur="pwdAgains"/>
			<!--<span @click="shows">显示</span>-->
			</label>
		</div>
		<div class="sure">
			<input type="button" id="btn" value="注册" @click="jump" />
		</div>
	</div>

</template>

<script>
	import http from '../../lib/httpclient';

	export default {
		data() {
			return {
				phone: '',
				pwds: '',
				pwdAgain: ''
			}
		},
		methods: {
			fanhui() {
				//				this.$router.push({
				//					name: 'my'
				//				})
				this.$router.go(-1);
			},
			phones() {
				let regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
				if(this.phone == '') {
					alert("请输入手机号码")
				} else if(!regPhone.test(this.phone)) {
					alert('手机格式不正确')
				}
			},
			pwdAgains() {
				if(this.pwds != this.pwdAgain) {
					alert('两次密码输入不正确')
				}
			},
			jump() {
				let regPhone = /^1[3|4|5|7|8][0-9]{9}$/;
				if(this.phone == '' || this.pwds == '' || this.pwdAgain == '') {
					alert('注册选项不能为空哦')
				} else if(!regPhone.test(this.phone)) {
					alert('手机格式不正确')
				} else if(this.pwds != this.pwdAgain) {
					alert('两次密码输入不正确！')
				} else {
					this.$router.push('my');
					let phone = this.phone;
					let pwd = this.pwdAgain;
					http.post('/reg', {
						phone,
						pwd
					}).then((res) => {
						if(res.status) {
							console.log(res)
							window.localStorage.setItem('token', res.data.token);
							this.$store.dispatch('getUsers')
						}
					})
				}
			}

		},
		mounted() {

		}
	}
</script>

<style lang="scss">
	.register {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		background-color: #f5f5f5;
		.head {
			width: 100%;
			height: 1.09375rem;
			display: flex;
			justify-content: center;
			align-items: center;
			background-color: #fff;
			position: relative;
			.fanhui {
				position: absolute;
				left: 0.3125rem;
				top: 50%;
				transform: translateY(-50%);
				svg {
					width: 0.5625rem;
					height: 0.5625rem;
				}
			}
		}
		.user {
			width: 100%;
			margin-top: 0.3125rem;
			display: flex;
			flex-direction: column;
			label {
				width: 100%;
				position: relative;
				input {
					width: 100%;
					height: 1.09375rem;
					border: none;
					font-size: 0.375rem;
					padding: 0 0.3125rem;
				}
				input:nth-of-type(1) {
					border-bottom: 1px solid #ccc;
				}
				svg {
					width: 0.40625rem;
					height: 0.40625rem;
					position: absolute;
					right: 0.3125rem;
					top: 50%;
					transform: translateY(-50%);
				}
				span {
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
		.sure {
			display: flex;
			justify-content: center;
			#btn {
				border: none;
				width: 90%;
				height: 0.9375rem;
				margin-top: 0.9375rem;
				font-size: 0.4375rem;
				color: #fff;
				background: #EC3E7D;
			}
		}
	}
</style>