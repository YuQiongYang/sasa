const state = {
    searchBarFixed:''
}

const mutations = {
    getScroll(_state){
       let scrollTop = $('.main').scrollTop();

        let mainHeight = document.querySelector(".main").scrollHeight;
        let hotBuyheight = document.querySelector(".hotBuy").scrollHeight;
        let hotHeight = document.querySelector(".hot").scrollHeight;
        
        let height = mainHeight-hotBuyheight+hotHeight;
        
        if(scrollTop >= height){
            _state.searchBarFixed = true;
        }else{
            _state.searchBarFixed = false;
        }

    }
}

const actions = {
    getScroll(_content){
        _content.commit('getScroll')
    }
}

export default{
    state,
    mutations,
    actions
}