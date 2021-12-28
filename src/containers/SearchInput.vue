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
    <base-toggle
      label="search by"
      button-primary="title"
      button-secondary="genre"
      @firstToggleClick="sortByTitle"
      @secondToggleClick="sortByGenre"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import InputField from '../components/InputField.vue';
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
  emits: ['findFilm'],
  data: () => ({ isActive: 'title' as isActiveType, text: '' }),
  methods: {
    sortByTitle() {
      this.isActive = 'title';
    },
    sortByGenre() {
      this.isActive = 'genre';
    },
    findFilm() {
      this.$emit('findFilm', this.text, this.isActive);
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
