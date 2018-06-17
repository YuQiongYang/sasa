<template>
	<div class="settings">
		<div class="head">
			<div class="fanhui" @click="fanhui">
				<icon name="angle-left"></icon>
			</div>
			<span>设置</span>
		</div>
		<div class="personal">
			<span class="logout" v-show="logOut" @click="logout">登出</span>
		</div>
		<div class="sureLogout" v-show="sure">
			<div class="dialog">
				<span>确认登出？</span>
				<div class="select">
					<span @click="cancel">取消</span>
					<span @click="confirm">确认</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				logOut:false,
				sure: false
			}
		},
		methods: {
			fanhui() {
				this.$router.push({
					name: 'my'
				})
			},
			logout() {
				this.sure = true;
			},
			cancel(){
				this.sure = false;
			},
			confirm(){
				window.localStorage.clear('token');
				this.sure = false;
				this.$router.push({
					name: 'my'
				})
			}
		},
		mounted(){
			this.$store.dispatch('getUsers');
			if(this.$store.state.user.phone == ''){
				this.logOut = false;
			}else{
				this.logOut = true;
			}
		}
	}
</script>

<style lang="scss">
	.settings {
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
		.personal {
			display: flex;
			flex-direction: column;
			span {
				display: flex;
				align-items: center;
				height: 0.9375rem;
				padding: 0 0.3125rem;
				color: #EC3E7D;
				border-top: 0.015625rem solid #ccc;
			}
		}
		.sureLogout {
			width: 100%;
			height: 100%;
			position: fixed;
			top: 0;
			left: 0;
			background: rgba(0, 0, 0, 0.2);
			.dialog {
				width: 4.6875rem;
				height: 2.34375rem;
				position: absolute;
				top: 40%;
				left: 50%;
				transform: translate(-50%, -50%);
				background: #fff;
				border-radius: 0.15625rem;
				display: flex;
				flex-direction: column;
				>span {
					width: 100%;
					height: 60%;
					display: flex;
					justify-content: center;
					align-items: center;
					border-bottom: 0.015625rem solid #ccc;
					font-size: 0.4375rem;
				}
				.select {
					display: flex;
					width: 100%;
					height: 40%;
					span {
						width: 50%;
						height: 100%;
						display: flex;
						justify-content: center;
						align-items: center;
						color: cornflowerblue;
					}
					>span:nth-of-type(1) {
						border-right: 0.015625rem solid #ccc;
					}
				}
			}
		}
	}
</style>