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
      type: _state.params.type
    }).then((res) => {
      _state.hotData = res.data
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
