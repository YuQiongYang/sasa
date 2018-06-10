import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import store from './client/vuex/store';


import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
Vue.component('icon',Icon);

import router from './client/router/router.js';
import shashaComponent from './client/component/shasha/shasha.vue';

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img4.imgtn.bdimg.com/it/u=1051709616,2752434580&fm=27&gp=0.jpg',
  loading: 'https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
})

new Vue({
  el: '#shasha',
  router,
  store,
  render: h => h(shashaComponent)
})
