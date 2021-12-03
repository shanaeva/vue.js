<template>
  <div class="wrapper">
    <div class="blur">
      <h1>FIND YOUR MOVIE</h1>
      <div class="search-input">
        <div class="input-field">
          <input-field v-model:value="text" />
        </div>
        <my-button :on-click="findFilm">
          SEARCH
        </my-button>
      </div>
      <filter-by
        label="SERCH BY"
        :button-primary="{ name: 'TITLE', method: sortByTitle }"
        :button-secondary="{ name: 'GENRE', method: sortByGenre }"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import InputField from '../components/InputField.vue';

export default defineComponent({
  name: 'SearchInput',
  components: {
    InputField,
  },
  props: { films: { type: Array, required: true } },
  data: () => ({ isActive: 'title', text: '', allFilms: [] }),
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
  .wrapper {
    background-image: url('../../public/background.jpg');
    color: #ffffff;
    border-radius: 2px;
  }
  .blur {
    background: rgba(16, 0, 0, 0.8);
    padding: 120px 58px 120px 58px;
    backdrop-filter: blur(1px);
  }
  .search-input {
    display: flex;
    justify-content: flex-end;
    margin-top: 36px;
    margin-bottom: 24px;
  }
  .input-field {
    width: 100%;
    margin-right: 16px;
  }
</style>
