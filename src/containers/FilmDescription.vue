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
        <image-item :src="film.src" />
      </div>
      <div class="main-info">
        <div class="header">
          <h1
            v-font="'l'"
            class="title"
          >
            {{ film.title }}
          </h1>
          <rating :value="film.rating" />
        </div>
        <p class="other-info">
          {{ film.genre }}
        </p>
        <div class="short-info-wrapper">
          <short-info :info-list="getShortInfo()" />
        </div>
        <p>{{ film.description }}</p>
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
      return [{ value: this.film.year, description: 'year' }, { value: this.film.duration, description: 'min' }];
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
  .other-info{
    color: #ffffff;
  }
  .short-info-wrapper {
    display: flex;
    margin: 24px 0;
  }
</style>
