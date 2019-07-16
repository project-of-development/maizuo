import http from "utils/http.js"

//正在热映
// https: //m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=2525012
// export const getMovieNow = (cityId, page) => http('get', '/gateway', {
//     cityId: cityId,
//     pageNum: page,
//     pageSize: 10,
//     type: 1,
//     k: 1878770,
//     headers: { 'X-Host': 'mall.film-ticket.film.list', 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}' }
// })
export const getMovieNow = (cityId, page) => http("get", "/gateway?cityId=" + cityId + "&pageNum=" + page + "&pageSize=10&type=1&k=1878770", {
    headers: {
        'X-Host': 'mall.film-ticket.film.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})

export const getMovieComm = (cityId, page) => http("get", "/gateway?cityId=" + cityId + "&pageNum=" + page + "&pageSize=10&type=2&k=7410117", {
    headers: {
        'X-Host': 'mall.film-ticket.film.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})