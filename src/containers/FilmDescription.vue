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
        <image-item :src="chooseFilm.poster_path" />
      </div>
      <div class="main-info">
        <div class="header">
          <h1
            v-font="'l'"
            class="title"
          >
            {{ chooseFilm.title }}
          </h1>
          <div class="rating-wrapper">
            <rating :value="chooseFilm.vote_count" />
          </div>
        </div>
        <p class="other-info">
          {{ chooseFilm.tagline }}
        </p>
        <div class="short-info-wrapper">
          <short-info :info-list="getShortInfo()" />
        </div>
        <p>{{ chooseFilm.overview }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions, mapGetters } from 'vuex';
import Rating from '../components/Rating.vue';
import ShortInfo from '../components/ShortInfo.vue';
import theme from '@/directives/theme';

export default defineComponent({
  name: 'FilmDescription',
  components: { ShortInfo, Rating },
  directives: { theme },
  computed: { ...mapGetters(['chooseFilm']) },
  methods: {
    getShortInfo() {
      return [
        { value: this.chooseFilm.release_date.slice(0, 4), description: 'year' },
        { value: this.chooseFilm.id, description: 'min' }];
    },
    ...mapActions(['clearSelectedFilm']),
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
