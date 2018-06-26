import http from '../../../../lib/httpclient';
import router from '../../../../router/router'

const state = {
	id:(window.location.hash).slice(10),
	limitedData: [],
	facial: [],
	result:{},
	good:{}
}

const mutations = {
	getLimited(_state) {
		http.getCt('/limited', {
			type: 'product_id'
		}).then((res) => {
			_state.limitedData = (res.data[0].data).slice(0, 10);
			_state.facial = res.data[0].data;
			for(let i=0;i<_state.facial.length;i++){
				if(_state.id && _state.id === _state.facial[i].product_info.goods_id){
					_state.good = _state.facial[i];
				}
			}
		})
	},
	isJump(_state) {
		http.get('/user').then((res) => {
			console.log(res)
			_state.result = res;
			if(!res.isLogin) {
				router.push('login');
			}
		})
	},
	jumpDetails(_state){
		
	}
	
}

const actions = {
	getLimited(_content) {
		_content.commit('getLimited')
	},
	isJump(_content) {
		_content.commit('isJump')
	},
	jumpDetails(_content){
		_content.commit('jumpDetails')
	}
}

export default {
	state,
	mutations,
	actions
}