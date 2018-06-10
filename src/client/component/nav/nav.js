import http from '../../lib/httpclient';

const state = {
	idx: 0
}

const mutations = {
	change(_state){
		// console.log(_state.idx)
	}
}

const actions = {
	change(_content) {
		_content.commit('change')
	}
}

export default {
	state,
	mutations,
	actions
}