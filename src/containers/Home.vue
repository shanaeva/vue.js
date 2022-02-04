<template>
  <div>
    <div class="header-film">
      <search-input />
    </div>
    <sort-by-date-and-rating />
    <cards-list />
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapActions, mapState } from 'vuex';
import SortByDateAndRating from './SortByDateAndRating.vue';
import SearchInput from './SearchInput.vue';
import CardsList from '@/containers/CardsList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    SortByDateAndRating,
    SearchInput,
    CardsList,
  },
  computed: { ...mapState(['sortedFilms']) },
  mounted() {
    console.log(this.sortedFilms.length);
    if (this.sortedFilms.length === 0) {
      this.getFilms();
    }
  },
  methods: {
    ...mapActions(['getFilms']),
  },
});
</script>

<style>
  .header-film {
    background-image: url('../../public/background.jpg');
    color: #ffffff;
    border-radius: 2px;
  }
</style>
