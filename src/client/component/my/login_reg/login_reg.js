import http from '../../../lib/httpclient.js';

const state = {
	tokenData:[],
	show:true,
	unshow:false,
	phone:''
}

const mutations = {
	getUsers(_state){
		http.get('/user').then((res)=>{
			console.log(res)
			_state.phone = res.phone;
			if(res.isLogin){
				_state.unshow = true;
				_state.show = false;
			}else{
				_state.show = true;
				_state.unshow = false;
			}
		})
	}
}

const actions = {
	getUsers(_content){
		_content.commit('getUsers');
	}
}

export default{
	state,
	mutations,
	actions
}
