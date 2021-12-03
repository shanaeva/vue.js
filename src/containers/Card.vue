<template>
  <div class="wrapper">
    <image-item :src="card.src" />
    <div class="header">
      <h1 class="title">
        {{ card.title }}
      </h1>
      <p class="year">
        {{ card.year }}
      </p>
    </div>
    <p>{{ card.genre }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { CardType } from '@/types';
import ImageItem from '@/components/ImageItem.vue';

export default defineComponent({
  name: 'Card',
  components: { ImageItem },
  props: {
    card: { type: Object as PropType<CardType>, required: true },
  },
});
</script>

<style scoped>
  .wrapper {
    max-width: 300px;
    margin: 26px;
    color: #9b9999;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 16px;
  }
  .title {
    margin-bottom: 4px;
  }
  .year {
    padding: 2px 14px;
    border: 1px solid gray;
    border-radius: 2px;
  }
</style>
