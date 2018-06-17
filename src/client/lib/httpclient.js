import router from '../router/router'
import axios from 'axios'
const baseUrl = 'http://192.168.1.104:88'

let filterUrl = (_url) => {
  if (_url && _url.startsWith('http')) {
    return _url;
  }
  return baseUrl + _url;
}

export default {
    getCt(_url, _params = {}){
        return new Promise((resolve, reject) => {
            axios({
                url: filterUrl(_url),
                params: _params,
                method: 'get'
            }).then((res) => {
                resolve(res.data);
            }).catch((error) => {
                reject(error);
            })
        })
    },
    get(_url, _params = {}) {
        return new Promise((resolve, reject) => {
//       axios.get(filterUrl(_url), {
//         params: _params
//       }).then((res) => {
//         resolve(res)
//       }).catch((error) => {
//         reject(error)
//       })

      axios({
        url: filterUrl(_url),
        method: 'get',
        data: _params,
        headers: {
          'auth': window.localStorage.getItem('token')
        }
      }).then((res) => {
        if (!res.data.status && res.data.message == 'unauth') {
//        router.push({
//          name: 'login'
//        });
        } else {
          resolve(res.data);
        }
      }).catch((error) => {
        reject(error);
      })
    })
  },
  post(_url, _params = {}) {
    return new Promise((resolve, reject) => {
      // axios.post(filterUrl(_url), _params).then((res) => {
      //     resolve(res)
      // }).catch((error) => {
      //     reject(error)
      // })
      axios({
        url: filterUrl(_url),
        method: 'post',
        data: _params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          "auth": window.localStorage.getItem('token')
        },
        transformRequest: [function(data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then(res => {
        if (!res.data.status && res.data.error == "unauthorized") {
//        router.push('login');
          return false;
        }
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}