<template>
  <div class="film-description">
    <div
      class="img-wrapper"
      @click="showSearch(true)"
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
          <h1 class="title">
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
import { defineComponent, PropType } from 'vue';
import Rating from '../components/Rating.vue';
import { CardType } from '@/types';
import ShortInfo from '../components/ShortInfo.vue';

export default defineComponent({
  name: 'FilmDescription',
  components: { ShortInfo, Rating },
  props: {
    film: { type: Object as PropType<CardType>, required: true },
    showSearch: { type: Function as PropType<(v: boolean)=> void>, required: true },
  },
  emits: ['showSearch'],
  methods: {
    getShortInfo() {
      return [{ value: this.film.year, description: 'year' }, { value: this.film.duration, description: 'min' }];
    },
  },
});
</script>

<style scoped>
  .film-description{
    background: rgba(0, 0, 0, 0.91);
    padding: 90px 58px 90px 58px;
    backdrop-filter: blur(1px);
  }
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
    font-size: 48px;
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
