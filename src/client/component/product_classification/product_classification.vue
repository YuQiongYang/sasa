<template>
	<div class="sasa">
		<hd></hd>
		<mains></mains>
		<navs></navs>
	</div>
</template>

<script>
	import hd from './header/header.vue';
	import mains from './main/main.vue';
	import navs from '../nav/nav.vue';
	
	export default{
		components:{
			hd,
			mains,
			navs
		}
	}
</script>

<style>
</style>