const state = {
	id:0,
	cartList:[]
}

const mutations = {
	getcartList(_state){
		_state.id = this.state.limited.id;
		console.log(_state.id)
	}
}

const actions = {
	getcartList(_content){
		_content.commit('getcartList')
	}
}

export default {
	state,
	mutations,
	actions
}
