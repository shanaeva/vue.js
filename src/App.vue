<template>
  <div class="main">
    <div class="header-film">
      <film-description
        v-if="selectedFilmId"
      />
      <div v-else>
        <search-input
          @findFilm="findFilm"
        />
      </div>
    </div>
    <sort-by-date-and-rating
      :films="sortedFilms"
    />
    <cards-list
      :cards="sortedFilms"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
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
  setup() {
    const { state } = useStore();
    const films = computed(() => state.films);
    const selectedFilmId = computed(() => state.selectedFilmId);

    return { films, selectedFilmId };
  },
  data: () => ({
    sortedFilms: [],
  }),
  created() {
    this.sortedFilms = this.films;
  },
  methods: {
    findFilm(text: string, searchBy: string) {
      this.sortedFilms = this.films.filter((card) => card[searchBy].toLowerCase()
        .startsWith(text.toLowerCase()));
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
