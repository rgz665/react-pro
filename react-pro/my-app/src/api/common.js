// api请求
import request from '@/utils/request'
export function getAdvertList(params){
    return request({
        url:"/qd_web/index/getAdvertList",
        method:"get",
        params
    })
}
export function getIndexs(data){
    return request({
        url:"",
        method:"post",
        data
    })
}