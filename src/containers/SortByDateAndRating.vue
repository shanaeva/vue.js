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
import { defineComponent, PropType } from 'vue';
import { CardType } from '@/types';
import sortBy from '@/mixins/sortBy';
import BaseToggle from '@/components/BaseToggle.vue';

export default defineComponent({
  components: { BaseToggle },
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
