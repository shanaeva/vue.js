<template>
  <div
    class="wrapper"
  >
    <div
      v-if="cards.length > 0"
      class="card-list"
    >
      <card
        v-for="card in cards"
        :key="card.id"
        :card="card"
        @click="selectFilm(card.id)"
      />
    </div>
    <div
      v-else
      v-font="'l'"
      class="empty"
    >
      No films found
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapActions } from 'vuex';
import Card from './Card.vue';
import { CardType } from '@/types';

export default defineComponent({
  components: { Card },
  props: {
    cards: { type: Array as PropType<Array<CardType>>, required: true },
  },
  methods: {
    ...mapActions(['selectFilm']),
  },
});
</script>

<style scoped>
  .wrapper{
    background-color: #232323;
    border-radius: 2px;
  }
  .card-list {
    display: flex;
    flex-wrap: wrap;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    color: #ffffff;
  }
</style>
