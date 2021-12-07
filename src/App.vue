<template>
  <div class="main">
    <header-film
      :all-films="allFilms"
      :sorted-films="sortedFilms"
      :selected-film="selectedFilm"
      :sort-by-date="sortByDate"
      :sort-by-rating="sortByRating"
      :find-film="findFilm"
      :show-search="showSearch"
      :is-show-search="isShowSearch"
    />
    <cards-list
      :cards="sortedFilms"
      @onClickCard="onClickCard"
      @showSearch="showSearch"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardsList from './containers/CardsList.vue';
import { CardType } from './types';
import data from './data';
import HeaderFilm from '@/containers/HeaderFilm.vue';

export default defineComponent({
  components: {
    HeaderFilm, CardsList,
  },
  data: () => ({
    sortedFilms: data,
    allFilms: data,
    selectedFilm: {},
    isShowSearch: true,
  }),
  methods: {
    sortByDate(films: Array<CardType>) {
      this.sortedFilms = films;
    },
    sortByRating(films: Array<CardType>) {
      this.sortedFilms = films;
    },
    findFilm(films: Array<CardType>) {
      this.sortedFilms = films;
    },
    showSearch(value: boolean) {
      this.isShowSearch = value;
    },
    onClickCard(film: CardType) {
      this.selectedFilm = film;
      this.isShowSearch = false;
    },
  },
});
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

* {
  margin: 0;
  box-sizing: border-box;
    font-family: 'Noto Sans', sans-serif;
}
body {
  background-color: #555555;
}
.main {
  height: 100%;
  background-color: #555555;
  padding: 20px;
}
</style>
