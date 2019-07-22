import router from 'router'

const state = {
    cityName: sessionStorage.getItem('cityName') || '深圳',
    cityId: sessionStorage.getItem('cityId') || 440300,
    filmId: sessionStorage.getItem('filmId') || 4703,
    goodsId: 'zb5MkOFQ',
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
    toFilm(state, filmId) {
        state.filmId = filmId;
        sessionStorage.setItem('filmId', filmId);
        router.push({ name: 'film', params: { filmId } });
    },
    saveCinemaId(state, cinemaId) {
        state.cinemaId = cinemaId;
        sessionStorage.setItem('cinemaId', cinemaId);
        router.push({ name: 'details' })
    },
    handlecity(state, districtName) {
        state.districtName = districtName
    },
    getgoodslist(state, goodsId) {
        state.goodsid = goodsId;
        router.push({ name: 'topic', params: { goodsId } });
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