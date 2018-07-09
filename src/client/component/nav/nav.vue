<template>
    <div class="nav">
        <ul class="list">
            <li v-for="(obj,idx) in navs">
            	<router-link :to=obj.path tag="div" class="tab-item">
            		<icon :name = obj.icons></icon>
              		<span>{{obj.kinds}}</span>
               </router-link>
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
          kinds: "首页",
          path:"/"
        },
        {
          icons: "indent",
          kinds: "分类",
          path:"/kinds"
        },
        {
          icons: "clock",
          kinds: "现时特卖",
          path:"/times"
        },
        {
          icons: "shopping-cart",
          kinds: "购物车",
          path:"/cart"
        },
        {
          icons: "user",
          kinds: "我的",
          path:"my"
        }
      ]
    };
  },
  methods:{
//	change(idx){
//		this.$store.state.nav.idx = idx;
//		this.$store.dispatch('change');
//		if(idx === 0){
//			this.$router.push({name:'index'})
//		}else if(idx === 1){
//			this.$router.push({name:'kinds'})
//		}else if(idx === 2){
//			this.$router.push({name:'times'})
//		}else if(idx === 3){
//			this.$router.push({name:'cart'})
//		}else if(idx === 4){
//			this.$router.push({name:'my'})
//		}
//	}
  }
};
</script>

<style lang="scss" >
    @import '../../sass/base.scss';
    /*@import '../../sass/nav.scss';*/
   .list{
    display: flex;
    justify-content: space-around;
    background: #555;
    li{
        padding: 0.15625rem 0;
        color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tab-item{
            flex: 1;
            text-align: center;
        }
        svg{
            color:#fff;
            width: 0.625rem;
            height: 0.703125rem;
        }
        span{
            display: block;
            font-size: 0.3125rem;
            color: #fff;
        }
        .router-link-exact-active {
            >span{
                display: block;
                color: #EC3E7D;
            }
            svg{
            color:#EC3E7D;
        }
            
        }    
    }
}

</style>