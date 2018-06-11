<template>
	<div class="sasa">
	<loginReg></loginReg>
		<navs></navs>
	</div>
</template>

<script>
	import loginReg from './login_reg/login_reg.vue';
	import navs from '../nav/nav.vue';

export default {
	components: {
		loginReg,
		navs
	}
}</script>

<style>
</style>