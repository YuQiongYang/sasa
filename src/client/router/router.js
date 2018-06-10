import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import index from '../component/index/index.vue';
import nav from '../component/nav/nav.vue';
import kinds from '../component/product_classification/product_classification.vue';
import times from '../component/times/times.vue';
import cart from '../component/cart/cart.vue';
import my from '../component/my/my.vue';

const router = new VueRouter({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/nav',
			name: 'nav',
			component: nav
		}, {
			path: '/kinds',
			name: 'kinds',
			component: kinds
		},{
			path: '/times',
			name: 'times',
			component: times
		},{
			path: '/cart',
			name: 'cart',
			component: cart
		},{
			path: '/my',
			name: 'my',
			component: my
		}
	]
})

export default router;