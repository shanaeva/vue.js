<template>
  <div
    class="wrapper"
  >
    <div
      v-if="sortedFilms.length > 0"
      class="card-list"
    >
      <card
        v-for="card in sortedFilms"
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
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import Card from './Card.vue';

export default defineComponent({
  components: { Card },
  computed: { ...mapState(['sortedFilms']) },
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
