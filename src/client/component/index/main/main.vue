<template>
	<div class="main" @scroll="$store.dispatch('getScroll')">
		<swiper></swiper>
		<classification></classification>
		<special></special>
		<limited></limited>
		<hotBuy></hotBuy>
	</div>
</template>

<script>
import swiper from "./swiper/swiper.vue";
import classification from "./classification/classification.vue";
import special from "./special/special.vue";
import limited from "./limited/limited.vue";
import hotBuy from "./hotBuy/hotBuy.vue";


export default {
  data() {
    return {
      searchBarFixed: ""
    };
  },
  components: {
    swiper,
    classification,
    special,
    limited,
    hotBuy
	}
};
</script>
	
<style>
@import "../../../sass/index/main.scss";
</style>