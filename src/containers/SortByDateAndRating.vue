<template>
  <div class="sorter">
    <div v-if="selectedFilmId">
      Film by {{ chooseFilm.genres.join(', ') }} genre
    </div>
    <div
      v-else
      class="filter-by-wrapper"
      :class="{ end: sortedFilms.length === 0 }"
    >
      <div
        v-if="sortedFilms.length > 0"
        class="found-films"
      >
        {{ sortedFilms.length }} movie found
      </div>
      <base-toggle
        label="sort by"
        button-primary="release date"
        button-secondary="rating"
        @firstToggleClick="sortByDate"
        @secondToggleClick="sortByRating"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters, mapState } from 'vuex';
import sortBy from '@/mixins/sortBy';

export default defineComponent({
  mixins: [sortBy],
  computed: { ...mapState(['films', 'selectedFilmId', 'sortedFilms']), ...mapGetters(['chooseFilm']) },
  methods: {
    ...mapActions(['sortByDate', 'sortByRating']),
  },
});
</script>

<style scoped>
  .sorter{
    color: #ffffff;
    padding: 16px 56px;
    background-color: #555555;
  }
  .filter-by-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .found-films{
    font-weight: bold;
  }
  .end {
    justify-content: flex-end;
  }
</style>
