import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import limited from '../component/index/main/limited/limited';
import hotBuy from '../component/index/main/hotBuy/hotBuy';
import scroll from '../component/index/main/main';
import nav from '../component/nav/nav';

const store = new Vuex.Store({
    modules: {
        limited,
        hotBuy,
        scroll,
        nav
    }
})

export default store;