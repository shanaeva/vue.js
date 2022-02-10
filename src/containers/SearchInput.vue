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
      <basic-button @click="onClick">
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
import { mapActions, mapState } from 'vuex';
import InputField from '../components/InputField.vue';
import BasicButton from '../components/BasicButton.vue';
import theme from '@/directives/theme';

type activeFlag = 'title' | 'genres';

export default defineComponent({
  name: 'SearchInput',
  components: {
    InputField,
    BasicButton,
  },
  directives: { theme },
  emits: ['findFilm'],
  data: () => ({ activeFlag: 'title' as activeFlag, text: '' }),
  computed: { ...mapState(['sortedFilms']) },
  methods: {
    sortByTitle() {
      this.activeFlag = 'title';
    },
    sortByGenre() {
      this.activeFlag = 'genres';
    },
    ...mapActions(['findFilm']),
    onClick() {
      this.findFilm({ text: this.text, searchBy: this.activeFlag });

      if (this.sortedFilms.length > 0) {
        this.$router.push('/');
      } else { this.$router.push('/notFound'); }
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
