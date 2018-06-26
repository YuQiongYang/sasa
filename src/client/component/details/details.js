import http from '../../lib/httpclient';

const state = {
	idx:(window.location.hash).slice(10),
	details:{}
}

const mutations = {
	getDetails(_state){
//		http.get('/limited').then((res)=>{
//			_state.details = res.data;
////			console.log(_state.details)
//		})
	}
}

const actions = {
	getDetails(_content){
		_content.commit('getDetails')
	}
}

export default {
	state,
	mutations,
	actions
}
