<template>
	<div class="classification">
		<ul class="kinds">
			<li v-for="(obj,idx) in datas">
				<img v-lazy="obj.img" />
				<span>{{obj.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				datas: [{
						img: "http://cn03.alicdn.sasa.com/public/images/13/46/2a/602dae85ad38274c8b6397d0e208d06fc0e2839a.png",
						title: "闪电保税"
					},
					{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608115020&di=a23ca1f2bbee1ee5ad0842a0bb40e8ab&imgtype=0&src=http%3A%2F%2Fimg.25pp.com%2Fuploadfile%2Fsoft%2Fimages%2F2015%2F0704%2F20150704051134861.jpg",
						title: '清仓特卖'
					},
					{
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608240454&di=ecda645b58a41050998a9bfab5c99460&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F05%2F18%2FFiSFlcZ13U-12fJXsqZgxbfHQuFj.jpg",
						title: "面膜"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608281237&di=b7d8cdf0db6cb85d7f212dbc1be579cc&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2014%2F08%2F19%2FFiSbbQCaFHiCeouNUNCodbzJBgx7.jpg",
						title: "面部护肤"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608551739&di=a16479912bb2a609e92b812efea0acab&imgtype=jpg&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1708779190%2C145141434%26fm%3D214%26gp%3D0.jpg",
						title: "彩妆"
					}, {
						img: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3785482997,3950262507&fm=27&gp=0.jpg",
						title: "香水"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608281237&di=b7d8cdf0db6cb85d7f212dbc1be579cc&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2014%2F08%2F19%2FFiSbbQCaFHiCeouNUNCodbzJBgx7.jpg",
						title: "健康美肌"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608240454&di=ecda645b58a41050998a9bfab5c99460&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2015%2F05%2F18%2FFiSFlcZ13U-12fJXsqZgxbfHQuFj.jpg",
						title: "个人护理"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608986870&di=50a43e1c1d94276db1cf5cbbbc149f5a&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fdesign%2F01%2F36%2F54%2F69%2F590469c07e6f8.png",
						title: "母婴护理"
					}, {
						img: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1527608281237&di=b7d8cdf0db6cb85d7f212dbc1be579cc&imgtype=0&src=http%3A%2F%2Fimgqn.koudaitong.com%2Fupload_files%2F2014%2F08%2F19%2FFiSbbQCaFHiCeouNUNCodbzJBgx7.jpg",
						title: "男士专区"
					}
				]
			}
		}
	}
</script>

<style lang="scss">
	.classification {
		width: 100%;
		height: 4.6875rem;
		.kinds {
			width: 100%;
			height: 100%;
			/*padding: 0.15625rem 0.3125rem;*/
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			li {
				width: 1.875rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				img {
					width: 1.09375rem;
					height: 1.09375rem;
					border-radius: 50%;
					margin-bottom: 0.15625rem;
				}
				img[lazy=loading] {
					width: 1.09375rem;
					height: 1.09375rem;
				}
				img[lazy=loaded] {
					width: 1.09375rem;
					height: 1.09375rem;
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
				span {
					color: #333;
				}
			}
		}
	}
</style>