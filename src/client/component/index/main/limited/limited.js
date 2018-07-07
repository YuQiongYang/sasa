import http from '../../../../lib/httpclient';
import router from '../../../../router/router'

const state = {
	id: (window.location.hash).slice(10),
	limitedData: [],
	facial: [],
	result: {},
	good: {},
	shoppingCart:{}
}

const mutations = {
	getLimited(_state) {
		http.getCt('/limited', {
			type: 'product_id'
		}).then((res) => {
			_state.limitedData = (res.data[0].data).slice(0, 10);
			_state.facial = res.data[0].data;
			for(let i = 0; i < _state.facial.length; i++) {
				if(_state.id && _state.id === _state.facial[i].product_info.goods_id) {
					_state.good = _state.facial[i];
				}
			}
		})
	},
	isJump(_state) {
		let goods;
		if(_state.good.product_info) {
			goods = {
				id: _state.good.product_info.goods_id || '',
				name: _state.good.product_info.name || '',
				img: _state.good.product_info.wap_product_image || '',
				price: _state.good.price.price || '',
				qty: 1
			}
		} else {
			goods = {
				id: _state.good.goods_id || '',
				name: _state.good.name || '',
				img: _state.good.wap_product_image || '',
				price: _state.good.prices || '',
				qty: 1
			}
		}
		goods = JSON.stringify(goods)
		http.post('/user', {
			phone:this.state.user.phone,
			goods
		}).then((res) => {
			if(res.message == 'timesout'){
				window.localStorage.clear()
			}
			_state.result = res;
//			if(!res.isLogin) {
//				router.push('login');
//				_state.shoppingCart = [];
//			}else{
//				_state.shoppingCart = res.allgoods.allgoods;
//			}
		})
	},
	jumpDetails(_state) {

	}

}

const actions = {
	getLimited(_content) {
		_content.commit('getLimited')
	},
	isJump(_content) {
		_content.commit('isJump')
	},
	jumpDetails(_content) {
		_content.commit('jumpDetails')
	}
}

export default {
	state,
	mutations,
	actions
}