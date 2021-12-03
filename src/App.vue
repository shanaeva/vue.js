<template>
  <div class="wrapper">
    <search-input
      :films="allFilms"
      @findFilm="findFilm"
    />
    <sorter
      :films="films"
      @sortByDate="sortByDate"
      @sortByRating="sortByRating"
    />
    <cards-list :cards="films" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardsList from './containers/CardsList.vue';
import Sorter from './containers/Sorter.vue';
import { CardType } from './types';
import data from './data';
import SearchInput from '@/containers/SearchInput.vue';

export default defineComponent({
  components: { SearchInput, CardsList, Sorter },
  data: () => ({
    films: data,
    allFilms: data,
  }),
  methods: {
    sortByDate(films: Array<CardType>) {
      this.films = films;
    },
    sortByRating(films: Array<CardType>) {
      this.films = films;
    },
    findFilm(films: Array<CardType>) {
      this.films = films;
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
.wrapper {
  height: 100%;
  background-color: #555555;
  padding: 20px;
}
</style>
