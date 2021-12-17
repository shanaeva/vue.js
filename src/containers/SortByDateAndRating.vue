<template>
  <div class="sorter">
    <div v-if="genre && !isShowSearch">
      Film by {{ genre }} genre
    </div>
    <div
      v-else
      class="filter-by-wrapper"
    >
      <div
        v-if="films.length > 0"
        class="found-films"
      >
        {{ films.length }} movie found
      </div>
      <filter-by
        label="sort by"
        :button-primary="{ name: 'release date', method: () => sortAscending(films, 'year')}"
        :button-secondary="{ name: 'rating', method: () => sortAscending(films, 'rating') }"
        :is-right="true"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardType } from '@/types';
import sortBy from '@/mixins/sortBy';

export default defineComponent({
  mixins: [sortBy],
  props: {
    films: { type: Array as PropType<Array<CardType>>, required: true },
    genre: { type: String, required: true },
    isShowSearch: { type: Boolean, required: true },
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
</style>
