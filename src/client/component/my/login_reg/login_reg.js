import http from '../../../lib/httpclient.js';
import router from '../../../router/router'

const state = {
	tokenData:[],
	show:true,
	unshow:false,
	phone:''
}

const mutations = {
	getUsers(_state){
		let userData = JSON.parse(window.localStorage.getItem('user'));
		if(userData){
			_state.phone = userData.data.phone;
			http.post('/user',{phone:_state.phone}).then((res)=>{
				if(res.isLogin){
					window.localStorage.setItem('loginStatus',JSON.stringify(res));
					let loginStatus = JSON.parse(window.localStorage.getItem('loginStatus'))
					if(loginStatus.isLogin){				
						_state.unshow = true;
						_state.show = false;
					}else{
						_state.show = true;
						_state.unshow = false;
					}
					
				}
			})
			
		}
	},
	verifyUser(_state){
		let loginStatus = JSON.parse(window.localStorage.getItem('loginStatus'));
		if(!loginStatus){
			router.push('login');
			
		}
	}
}

const actions = {
	getUsers(_content){
		_content.commit('getUsers');
	},
	verifyUser(_content){
		_content.commit('verifyUser');
	}
}

export default{
	state,
	mutations,
	actions
}
