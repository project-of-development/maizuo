


import http from "utils/http.js"


//电影详情 https://m.maizuo.com/gateway?filmId=4703&k=9794319
export const getMovieDes = (filmId)=>http("get","/gateway?filmId="+filmId+"&k=4253804",{headers: {'X-Host': 'mall.film-ticket.film.info',
'X-Client-Info':'{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'}})



