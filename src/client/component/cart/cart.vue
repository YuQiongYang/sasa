<template>
	<div class="sasa">
		<cartLists></cartLists>
		<navs></navs>
	</div>
</template>

<script>
	import cartLists from './cartLists/cartLists.vue'
	import navs from '../nav/nav.vue';
	
	export default{
		components:{
			cartLists,
			navs
		}
	}
</script>

<style lang="scss">
	.cartList{
		display: flex;
		flex-direction: column;
		height: 100%;
		.head{
			height: 0.9375rem;
			font-size: 0.46875rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.main{
			flex: 1;
			height: 100%;
			overflow-x: hidden
		}
	}
</style>