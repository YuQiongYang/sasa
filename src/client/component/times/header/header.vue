<template>
	<div class="times">
		<span>限时特卖
		</span>
		<icon name="search"></icon>
	</div>
</template>

<script>
</script>

<style lang="scss">
	.times{
		height: 1.09375rem;
		border-bottom: 0.015625rem solid #ccc;
		position: relative;
		span{
			display: flex;
			justify-content: center;
			font-size: 0.46875rem;
			line-height: 0.9375rem;
		}
		svg{
			position: absolute;
			right: 0.3125rem;
			top: 50%;
			transform: translateY(-50%);
			width: 0.46875rem;
			height: 0.46875rem;
		}
	}
</style>