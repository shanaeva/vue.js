<template>
  <div class="main">
    <div class="header-film">
      <film-description
        v-if="!isShowSearch"
        :film="selectedFilm"
        :show-search="showSearch"
      />
      <div v-else>
        <search-input
          :films="allFilms"
          :show-search="showSearch"
          @findFilm="findFilm"
        />
      </div>
    </div>
    <sort-by-date-and-rating
      :films="sortedFilms"
      :genre="selectedFilm?.genre"
      :is-show-search="isShowSearch"
      @sort="sort"
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
import SortByDateAndRating from '@/containers/SortByDateAndRating.vue';
import FilmDescription from '@/containers/FilmDescription.vue';
import SearchInput from '@/containers/SearchInput.vue';

export default defineComponent({
  components: {
    SortByDateAndRating,
    FilmDescription,
    SearchInput,
    CardsList,
  },
  data: () => ({
    sortedFilms: data,
    allFilms: data,
    selectedFilm: {},
    isShowSearch: true,
  }),
  methods: {
    sort(films: Array<CardType>) {
      this.sortedFilms = films;
    },
    findFilm(text: string, searchBy: string) {
      this.sortedFilms = this.allFilms.filter((card) => card[searchBy].toLowerCase()
        .startsWith(text.toLowerCase()));
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
.header-film {
    background-image: url('../public/background.jpg');
    color: #ffffff;
    border-radius: 2px;
}
</style>
