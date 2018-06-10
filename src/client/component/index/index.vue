<template>
	<div class="sasa">
		<hd></hd>
		<center></center>
		<navs></navs>
	</div>
</template>

<script>
	import http from '../../lib/httpclient';
	import hd from './header/header.vue';
	import center from './main/main.vue';
	import navs from '../nav/nav.vue';
	export default {
		components: {
			hd,
			center,
			navs
		},
		mounted(){
		this.$store.dispatch('getLimited');
		}
	}
</script>

<style>
	/*@import '../../sass/index.scss'*/
</style>