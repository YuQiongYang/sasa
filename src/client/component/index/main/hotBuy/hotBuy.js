import http from '../../../../lib/httpclient';

const state = {
  name: "",
  params: {
    type: "product_id"
  },
  hotData: []
}

const mutations = { 
  getdata(_state) {
    http.getCt('/lipstick', {
      type: _state.params.type || 'product_id'
    }).then((res) => {
      _state.hotData = res.data;
      if(this.state.limited.id){
      	for(let i=0;i<_state.hotData.length;i++){
      		if(this.state.limited.id == _state.hotData[i].goods_id){
//    			console.log(99999,_state.hotData[i])
      			this.state.limited.good = _state.hotData[i];
      		}
      	}
      }
    })	  
  }

}

const actions = {
  getdata(_content) {
    _content.commit('getdata')
  }
}

export default {
  state,
  mutations,
  actions
}
