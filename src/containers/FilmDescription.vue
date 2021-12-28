<template>
  <div v-theme="'rgba(0, 0, 0, 0.91)'">
    <div
      class="img-wrapper"
      @click="clearSelectedFilm"
    >
      <img
        src="../../public/loupe.svg"
        class="img"
        alt=""
      >
    </div>
    <div class="wrapper">
      <div>
        <image-item :src="film.poster_path" />
      </div>
      <div class="main-info">
        <div class="header">
          <h1
            v-font="'l'"
            class="title"
          >
            {{ film.title }}
          </h1>
          <div class="rating-wrapper">
            <rating :value="film.vote_count" />
          </div>
        </div>
        <p class="other-info">
          {{ film.tagline }}
        </p>
        <div class="short-info-wrapper">
          <short-info :info-list="getShortInfo()" />
        </div>
        <p>{{ film.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from 'vuex';
import Rating from '../components/Rating.vue';
import ShortInfo from '../components/ShortInfo.vue';
import theme from '@/directives/theme';

export default defineComponent({
  name: 'FilmDescription',
  components: { ShortInfo, Rating },
  directives: { theme },
  emits: ['showSearch'],
  setup() {
    const { getters, dispatch } = useStore();
    const film = computed(() => getters.chooseFilm);

    const clearSelectedFilm = (id: number) => {
      dispatch('clearSelectedFilm', id);
    };

    return { film, clearSelectedFilm };
  },
  methods: {
    getShortInfo() {
      return [{ value: this.film.release_date.slice(0, 4), description: 'year' }, { value: this.film.id, description: 'min' }];
    },
  },
});
</script>

<style scoped>
  .wrapper {
    display: flex;
  }
  .img-wrapper{
    position: absolute;
    right: 36px;
    top: 24px;
    cursor: pointer;
  }
  .img{
    width: 24px;
    height: 24px;
  }
  .main-info{
    margin: 10px 56px;
  }
  .header {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
  }
  .title {
    margin-right: 22px;
    color: #ffffff;
    font-weight: normal;
  }
  .rating-wrapper {
    flex-shrink: 0;
  }
  .other-info{
    color: #555555;
  }
  .short-info-wrapper {
    display: flex;
    margin: 24px 0;
  }
</style>
