<template>
  <div class="wrapper">
    <div
      v-if="films.length > 0"
      class="found-films"
    >
      {{ films.length }} movie found
    </div>
    <filter-by
      label="SORT BY"
      :button-primary="{ name: 'RELEASE DATE', method: sortByDate }"
      :button-secondary="{ name: 'RATING', method: sortByRating }"
      :is-right="true"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardType } from '@/types';

export default defineComponent({
  props: {
    films: { type: Array as PropType<Array<CardType>>, required: true },
  },
  data: () => ({ isActiveDate: true, isActiveRating: false }),
  methods: {
    sortByDate() {
      const newCards = [...this.films];
      newCards.sort((a, b) => b.year - a.year);
      this.$emit('sortByDate', newCards);
    },
    sortByRating() {
      const newCards = [...this.films];
      newCards.sort((a, b) => b.rating - a.rating);
      this.$emit('sortByRating', newCards);
    },
  },
});
</script>

<style scoped>
  .wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
    padding: 16px 56px;
    background-color: #555555;
  }
  .found-films{
    font-weight: bold;
  }
</style>
