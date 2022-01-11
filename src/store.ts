import { createStore } from 'vuex';
import films from './data';

export default createStore({
  state: {
    films,
    selectedFilmId: null,
  },
  getters: {
    chooseFilm: (state) => state.films.find((film) => film.id === state.selectedFilmId),
  },
  mutations: {
    SELECT_FILM_ID(state, id) {
      state.selectedFilmId = id;
    },
    CLEAR_SELECTED_FILM(state) {
      state.selectedFilmId = null;
    },
  },
  actions: {
    selectFilm({ commit }, id) {
      commit('SELECT_FILM_ID', id);
    },
    clearSelectedFilm({ commit }) {
      commit('CLEAR_SELECTED_FILM');
    },
  },
});
