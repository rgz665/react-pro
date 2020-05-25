import axios from "axios";
import browser from "@/utils/browser";
import qs from 'qs'

// 创建axios实例
const service = axios.create({
    baseURL: '/api',
    withCredentials: true, //请求携带cookies
    timeout: 5000 //请求延时时间
})
// 设置 post默认 Content-Type,用Content-Type来表示具体请求中的媒体类型信息
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
// 添加请求拦截器
service.interceptors.request.use(
    config => {
        // 携带token在这里操作
        if (config.method === "get" && browser.isIE) {
            // 给GET 请求后追加时间戳， 解决IE GET 请求缓存问题
            let symbol = config.url.indexOf('?') >= 0 ? '&' : '?'
            config.url += symbol + '_=' + Date.now()
        }
        if (config.type === 'formData' && config.method === 'post') {
            config.headers = { 'Content-Type': 'multipart/form-data' }
            return config
        }
        if (config.type === 'json' && config.method === 'post') {
            config.headers = { 'Content-Type': 'application/json' }
            return config
        }
        if (config.method !== 'post') {
            return config
        }
        config.data = qs.stringify(config.data)
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
// 添加response拦截器
service.interceptors.response.use(
    response => {
        const res = response.data
        if (res.code == 0) {
        } else if (res.code == -2) {
        } else {
        }
        return res;
    },
    error => {
        //直接抛出弹出异常信息
        // if(error.response){
        // switch (error.response.status){
        //     case 400:
        //         break;
        //     case 401:
        //         break;
        // }
        // }
        return Promise.reject(error)
    }
)
export default service;