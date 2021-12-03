<template>
  <div class="img-wrapper">
    <img
      class="img"
      :src="src"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImageItem',
  props: {
    src: {
      type: String,
      require: true,
      default: '',
    },
  },
});
</script>

<style scoped>
  .img-wrapper {
  width: 300px;
  height: 400px;
  border-radius: 4px;
  overflow: hidden;
  cursor: pointer;
  }
  .img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  }
</style>
