import { createStore } from 'vuex';
import { CardType } from '@/types';
import ApiService from '@/api';

export default createStore({
  state: {
    films: [],
    sortedFilms: [],
    selectedFilmId: null,
    sortBy: '',
  },
  getters: {
    chooseFilm: (state) => state.films.find((film) => film.id === state.selectedFilmId),
  },
  mutations: {
    SELECT_FILM_ID(state, id) {
      state.selectedFilmId = id;
    },
    FIND_FILM(state, { text, searchBy }) {
      if (searchBy === 'title') {
        state.sortedFilms = state.films.filter((card) => card.title.toLowerCase()
          .startsWith(text.toLowerCase()));
      } else {
        state.sortedFilms = state.films.reduce<Array<CardType>>((acc, card) => {
          const selectGenre = card.genres.find(
            (genre) => genre.toLowerCase() === text.toLowerCase(),
          );
          if (selectGenre) {
            acc.push(card);
          }
          return acc;
        }, []);
      }
    },
    SORT_BY_DATE(state) {
      state.sortedFilms.sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
    },
    SORT_BY_RATING(state) {
      state.sortedFilms.sort((a, b) => b.vote_count - a.vote_count);
    },
    GET_FILMS(state, films) {
      state.films = films;
      state.sortedFilms = films;
    },
  },
  actions: {
    selectFilm({ commit }, id) {
      commit('SELECT_FILM_ID', id);
    },
    findFilm({ commit }, { text, searchBy }) {
      commit('FIND_FILM', { text, searchBy });
    },
    sortByDate({ commit }) {
      commit('SORT_BY_DATE');
    },
    sortByRating({ commit }) {
      commit('SORT_BY_RATING');
    },
    getFilms({ commit }) {
      ApiService.getMovies().then((res) => commit('GET_FILMS', res.data));
    },
  },
});
