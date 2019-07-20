import router from 'router'

const state = {
    cityName: sessionStorage.getItem('cityName') || '深圳',
    cityId: sessionStorage.getItem('cityId') || 440300,
    filmId: sessionStorage.getItem('filmId') || 4703,
    goodsid: 'zb5MkOFQ',
    cinemaId: sessionStorage.getItem('cinemaId') || 6486,
    districtName: ''
}

const mutations = {
    cityGet(state, $event) {
        let text = $event.currentTarget.innerText; //城市名称
        let id = $event.currentTarget.getAttribute("id"); //城市ID 

        state.cityName = text;
        state.cityId = id;
        sessionStorage.setItem('cityName', text);
        sessionStorage.setItem('cityId', id);
        router.back();
    },
    backmovie(state, filmId) {
        state.filmId = filmId;
        sessionStorage.setItem('filmId', filmId);
        router.push({ name: 'moviedes' });
    },
    saveCinemaId(state, cinemaId) {
        state.cinemaId = cinemaId;
        sessionStorage.setItem('cinemaId', cinemaId);
        router.push({ name: 'details' })
    },
    handlecity(state, districtName) {
        state.districtName = districtName
    }
}

const getters = {
    getdistrictName(state) {
        return state.districtName
    }
}


export default {
    state,
    mutations,
    getters,
    namespaced: true
}