<template>
  <div
    class="card"
    @click="click"
  >
    <image-item :src="card.poster_path" />
    <div class="header">
      <h1
        v-font="'m'"
        class="title"
      >
        {{ card.title }}
      </h1>
      <p class="year">
        {{ getYear() }}
      </p>
    </div>
    <p>{{ getGenre() }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardType } from '@/types';

export default defineComponent({
  name: 'Card',
  props: {
    card: { type: Object as PropType<CardType>, required: true },
  },
  emits: ['click'],
  methods: {
    click() {
      this.$emit('click');
    },
    getGenre() {
      return this.card.genres.join(' & ');
    },
    getYear() {
      return this.card.release_date.slice(0, 4);
    },
  },
});
</script>

<style scoped>
  .card {
    max-width: 300px;
    margin: 26px;
    color: #9b9999;
    cursor: pointer;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 16px;
  }
  .title {
    margin-bottom: 4px;
  }
  .year {
    padding: 2px 14px;
    border: 1px solid gray;
    border-radius: 2px;
  }
</style>
