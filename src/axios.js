import axios from 'axios'
import router from './router/index'
import store from './store/index'
import * as types from './store/types'

//
 axios.default.timeout = 10000;
// axios.defaults.headers.post['Content-Type'] = 'application/json'

const instance = axios.create();
// instance.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use = instance.interceptors.request.use
instance.interceptors.request.use(config => {
	if(sessionStorage.getItem('token')) {
		config.headers.Authorization = `token ${sessionStorage.getItem('token')}`
			.replace(/(^\")|(\"$)/g, '')
	}
	return config
}, err => {
	return Promise.reject(err)
})
// axios拦截响应
instance.interceptors.response.use(response => {
	return response
}, err => {
	return Promise.reject(err)
})

export default axios;
