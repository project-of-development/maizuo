import http from "utils/http.js"

export const getmove = (cityId) => http("get", "/gateway?cityId=" + cityId + "&ticketFlag=1&k=6422262", {
    headers: {
        'X-Host': 'mall.film-ticket.cinema.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})