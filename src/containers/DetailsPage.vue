<template>
  <div>
    <div class="header-film">
      <film-description
        v-if="selectedFilmId"
      />
    </div>
    <sort-by-date-and-rating />
    <cards-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import SortByDateAndRating from '@/containers/SortByDateAndRating.vue';
import FilmDescription from '@/containers/FilmDescription.vue';
import CardsList from '@/containers/CardsList.vue';

export default defineComponent({
  name: 'DetailsPage',
  components: {
    SortByDateAndRating,
    FilmDescription,
    CardsList,
  },
  computed: { ...mapState(['selectedFilmId']) },
  mounted() {
    this.getFilms();
  },
  methods: {
    ...mapActions(['getFilms']),
  },
});
</script>
