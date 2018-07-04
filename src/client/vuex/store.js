import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import limited from '../component/index/main/limited/limited';
import hotBuy from '../component/index/main/hotBuy/hotBuy';
import scroll from '../component/index/main/main';
import user from '../component/my/login_reg/login_reg';
import cartLists from '../component/cart/cartLists/cartLists';
import details from '../component/details/details';
import nav from '../component/nav/nav';

const store = new Vuex.Store({
    modules: {
        limited,
        hotBuy,
        scroll,
        user,
        details,
        cartLists,
        nav
    }
})

export default store;