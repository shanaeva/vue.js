<template>
  <div>
    <div class="header-film">
      <div>
        <search-input />
      </div>
    </div>
    <sort-by-date-and-rating />
    <div
      class="wrapper"
    >
      <div
        v-font="'l'"
        class="empty"
      >
        No films found
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import SortByDateAndRating from '@/containers/SortByDateAndRating.vue';
import SearchInput from '@/containers/SearchInput.vue';

export default defineComponent({
  name: 'NotFound',
  components: {
    SortByDateAndRating,
    SearchInput,
  },
});
</script>

<style scoped>
  .wrapper{
    background-color: #232323;
    border-radius: 2px;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 600px;
    color: #ffffff;
  }
</style>
