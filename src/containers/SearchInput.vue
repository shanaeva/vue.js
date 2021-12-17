<template>
  <div v-theme="'rgba(0, 0, 0, 0.8)'">
    <h1 v-font:uppercase>
      Find your movie
    </h1>
    <div class="search-input">
      <div class="input-field-wrapper">
        <input-field
          v-model="text"
        />
      </div>
      <basic-button @click="findFilm">
        SEARCH
      </basic-button>
    </div>
    <filter-by
      label="search by"
      :button-primary="{ name: 'title', method: sortByTitle }"
      :button-secondary="{ name: 'genre', method: sortByGenre }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import InputField from '../components/InputField.vue';
import { CardType } from '@/types';
import BasicButton from '../components/BasicButton.vue';
import theme from '@/directives/theme';

type isActiveType = 'title' | 'genre';

export default defineComponent({
  name: 'SearchInput',
  components: {
    InputField,
    BasicButton,
  },
  directives: { theme },
  props: {
    films: { type: Array as PropType<Array<CardType>>, required: true },
  },
  emits: ['findFilm'],
  data: () => ({ isActive: 'title' as isActiveType, text: '', allFilms: [] }),
  methods: {
    sortByTitle() {
      this.isActive = 'title';
    },
    sortByGenre() {
      this.isActive = 'genre';
    },
    findFilm() {
      const filteredFilms = this.films.filter((card) => card[this.isActive].toLowerCase()
        .startsWith(this.text.toLowerCase()));
      this.$emit('findFilm', filteredFilms);
    },
  },
});
</script>

<style scoped>
  .search-input {
    display: flex;
    justify-content: flex-end;
    margin-top: 36px;
    margin-bottom: 24px;
  }
  .input-field-wrapper {
    width: 100%;
    margin-right: 16px;
  }
</style>
