import { createStore } from 'vuex';
import films from './data';
import { CardType } from '@/types';

export default createStore({
  state: {
    films,
    sortedFilms: films,
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
    CLEAR_SELECTED_FILM(state) {
      state.selectedFilmId = null;
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
  },
  actions: {
    selectFilm({ commit }, id) {
      commit('SELECT_FILM_ID', id);
    },
    clearSelectedFilm({ commit }) {
      commit('CLEAR_SELECTED_FILM');
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
  },
});
