<template>
  <div class="sorter">
    <div v-if="selectedFilmId">
      Film by {{ film.genre }} genre
    </div>
    <div
      v-else
      class="filter-by-wrapper"
      :class="{ end: films.length === 0 }"
    >
      <div
        v-if="films.length > 0"
        class="found-films"
      >
        {{ films.length }} movie found
      </div>
      <base-toggle
        label="sort by"
        button-primary="release date"
        button-secondary="rating"
        @firstToggleClick="sortAscending(films, 'year')"
        @secondToggleClick="sortAscending(films, 'rating')"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { useStore } from 'vuex';
import { CardType } from '@/types';
import sortBy from '@/mixins/sortBy';

export default defineComponent({
  mixins: [sortBy],
  props: {
    films: { type: Array as PropType<Array<CardType>>, required: true },
    isRight: { type: Boolean, require: false },
  },
  setup() {
    const { state, getters } = useStore();
    const film = computed(() => getters.chooseFilm);
    const selectedFilmId = computed(() => state.selectedFilmId);

    return { selectedFilmId, film };
  },
  data: () => ({ isActiveDate: true, isActiveRating: false }),
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
