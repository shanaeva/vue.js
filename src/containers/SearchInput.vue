<template>
  <div class="blur">
    <h1>FIND YOUR MOVIE</h1>
    <div class="search-input">
      <div class="input-field-wrapper">
        <input-field
          v-model="text"
        />
      </div>
      <my-button :on-click="findFilm">
        SEARCH
      </my-button>
    </div>
    <filter-by
      label="SEARCH BY"
      :button-primary="{ name: 'TITLE', method: sortByTitle }"
      :button-secondary="{ name: 'GENRE', method: sortByGenre }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import InputField from '../components/InputField.vue';
import { CardType } from '@/types';
import MyButton from '../components/MyButton.vue';

type isActiveType = 'title' | 'genre';

export default defineComponent({
  name: 'SearchInput',
  components: {
    InputField,
    MyButton,
  },
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
  .blur {
    background: rgba(0, 0, 0, 0.8);
    padding: 90px 58px 90px 58px;
    backdrop-filter: blur(1px);
  }
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
