import http from '../../../../lib/httpclient';

const state = {
	limitedData:[],
	facial:[]
}

const mutations = {
	getLimited(_state){
		http.getCt('/limited',{type:'product_id'}).then((res)=>{
			_state.limitedData = (res.data[0].data).slice(0,10);
			_state.facial = res.data[0].data;
		})
	}
}

const actions = {
	getLimited(_content){
		_content.commit('getLimited')
	}
}

export default{
	state,
	mutations,
	actions
}
