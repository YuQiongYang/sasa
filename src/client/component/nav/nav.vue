<template>
    <div class="nav">
        <ul class="list">
            <li v-for="(obj,idx) in navs" @click="change(idx)">
            	<icon :name = obj.icons :class="{'icon_active':$store.state.nav.idx === idx}"></icon>
              <span :class="{'active':$store.state.nav.idx === idx}">{{obj.kinds}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      navs: [
        {
          icons: "home",
          kinds: "首页"
        },
        {
          icons: "indent",
          kinds: "分类"
        },
        {
          icons: "clock",
          kinds: "现时特卖"
        },
        {
          icons: "shopping-cart",
          kinds: "购物车"
        },
        {
          icons: "user",
          kinds: "我的"
        }
      ]
    };
  },
  methods:{
  	change(idx){
  		this.$store.state.nav.idx = idx;
  		this.$store.dispatch('change');
		if(idx === 0){
			this.$router.push({name:'index'})
		}else if(idx === 1){
			this.$router.push({name:'kinds'})
		}else if(idx === 2){
			this.$router.push({name:'times'})
		}else if(idx === 3){
			this.$router.push({name:'cart'})
		}else if(idx === 4){
			this.$router.push({name:'my'})
		}
  	}
  }
};
</script>

<style lang="scss" >
    @import '../../sass/base.scss';
    @import '../../sass/nav.scss';
</style>