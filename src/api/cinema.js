import http from "utils/http.js"

export const getmove = (cityId) => http("get", "/gateway?cityId=" + cityId + "&ticketFlag=1&k=6422262", {
    headers: {
        'X-Host': 'mall.film-ticket.cinema.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})

//影院地址
export const getcinemasAress = (cinemaid) => http("get", "/gateway/?cinemaId=" + cinemaid + "&k=2718506", {
    headers: {
        'X-Host': 'mall.film-ticket.cinema.info',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})



//轮播地址
export const getcinemasImg = (cinemaid) => http("get", "/gateway/?cinemaId=" + cinemaid + "&k=1513522", {
    headers: {
        'X-Host': 'mall.film-ticket.film.cinema-show-film',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})


//放映场次
export const getcinemasCont = (filmId, cinemaid, date) => http("get", "/gateway/?filmId=" + filmId + "&cinemaId=" + cinemaid + "&date=" + date + "&k=5494836", {
    headers: {
        'X-Host': 'mall.film-ticket.schedule.list',
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"156177921210492605106789"}'
    }
})