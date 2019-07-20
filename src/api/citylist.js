import http from "utils/http.js"

export const getCityList = () => http("get", "/gateway?k=9358817", {
    headers: {
        'X-Host': 'mall.film-ticket.city.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})