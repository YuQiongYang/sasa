import http from '../../../lib/httpclient';

const state = {
	id:0,
	cartList:[]
}

const mutations = {
	getcartList(_state){
		_state.id = this.state.limited.id;
		
	},
	determine(_state){
		http.post('/user').then((res)=>{
			console.log(res)
		})
	}
	
}

const actions = {
	getcartList(_content){
		_content.commit('getcartList')
	},
	determine(_content){
		_content.commit('determine')
	}
}

export default {
	state,
	mutations,
	actions
}
