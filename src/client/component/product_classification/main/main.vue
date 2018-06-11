<template>
	<div class="pro_classification">
		<div class="kinds">
			<span>商品分类</span>
		</div>

		<div class="detais_kinds">
			<ul class="cosmetics">
				<li v-for="(obj,idx) in kinds" @click="change(obj,idx)">
					<span :class="{'active':index === idx}">{{obj.name}}</span>
				</li>
			</ul>
			<ul class="cos_kinds">
				<li v-for="(obj,idx) in right">
					<span>{{obj.key}}</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import http from '../../../lib/httpclient';

	export default {
		data() {
			return {
				kinds: [],
				right: [],
				status: true,
				index: 0
			}
		},
		methods: {
			change(obj, idx) {
				this.index = idx;
				this.right = this.kinds[idx].lists;
			}
		},
		mounted() {
			http.getCt('/pro_kinds').then((res) => {
				this.kinds = res.data;
				this.right = res.data[0].lists;
			})
		}
	}
</script>

<style lang="scss">
	.pro_classification {
		flex: 1;
		overflow-x: hidden;
		.kinds {
			height: 1.25rem;
			display: flex;
			justify-content: center;
			align-items: center;
			border-bottom: 1px solid #f0f0f0;
			span {
				color: #EC3E7D;
				font-size: 0.4375rem;
			}
		}
		.detais_kinds {
			display: flex;
			height: 100%;
			.cosmetics {
				width: 30%;
				height: 100%;
				display: flex;
				flex-direction: column;
				background-color: #f3f3f3;
				li {
					height: 1.25rem;
					display: flex;
					align-items: center;
					span {
						width: 100%;
						height: 100%;
						line-height: 1.25rem;
						padding-left: 0.46875rem;
						border-left: 0.046875rem solid #f3f3f3;
					}
					.active {
						background-color: #fff;
						color: #EC3E7D;
						border-left: 0.046875rem solid #EC3E7D;
						border-top: 0.015625rem solid #ccc;
						border-bottom: 0.015625rem solid #ccc;
					}
				}
			}
			.cos_kinds {
				width: 70%;
				height: 100%;
				display: flex;
				flex-direction: column;
				li {
					height: 1.25rem;
					display: flex;
					align-items: center;
					padding-left: 0.46875rem;
				}
				li:nth-of-type(1) {
					color: sandybrown;
				}
				li:nth-of-type(2) {
					color: sandybrown;
				}
			}
		}
	}
</style>