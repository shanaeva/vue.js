<template>
  <div class="header">
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
    @sortByDate="sortByDate"
    @sortByRating="sortByRating"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import FilmDescription from './FilmDescription.vue';
import SearchInput from './SearchInput.vue';
import { CardType } from '@/types';
import SortByDateAndRating from './SortByDateAndRating.vue';

export default defineComponent({
  name: 'HeaderFilm',
  components: {
    SortByDateAndRating,
    FilmDescription,
    SearchInput,
  },
  props: {
    allFilms: { type: Array as PropType<Array<CardType>>, required: true },
    sortedFilms: { type: Array as PropType<Array<CardType>>, required: true },
    isShowSearch: { type: Boolean, required: true },
    selectedFilm: { type: Object as PropType<CardType> || {}, required: true },
    sortByDate: { type: Function as PropType<(value: CardType) => void>, required: true },
    sortByRating: { type: Function as PropType<(value: CardType) => void>, required: true },
    findFilm: { type: Function as PropType<(value: CardType) => void>, required: true },
    showSearch: { type: Function as PropType<(value: boolean) => void>, required: true },
  },
});
</script>

<style scoped>
  .header {
    background-image: url('../../public/background.jpg');
    color: #ffffff;
    border-radius: 2px;
  }
</style>
