import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = "http://localhost:8081";
//axios.defaults.headers.get['Accepts'] = 'application/json';

/*axios.defaults.headers.common['Authorizaion'] = 'afdjdhfjd';



const reqInterceptor = axios.interceptors.request.use(config=>{
  console.log("request interceptor",config);
  return config;
})

const responseInterceptor = axios.interceptors.response.use(config=>{
  return config;
})

//can also eject some request or response, wil take request id
//const requestId = axios.inerceptros.request .....

axios.interceptors.request.eject(reqInterceptor)
axios.interceptors.response.eject(responseInterceptor)

 */

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
