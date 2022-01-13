<template>
  <div class="main">
    <div class="header-film">
      <film-description
        v-if="selectedFilmId"
      />
      <div v-else>
        <search-input />
      </div>
    </div>
    <sort-by-date-and-rating />
    <cards-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, useStore } from 'vuex';
import CardsList from './containers/CardsList.vue';
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
  computed: { ...mapState(['selectedFilmId']) },
  mounted() {
    const { dispatch } = useStore();
    dispatch('getFilms');
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
