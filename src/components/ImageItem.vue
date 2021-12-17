<template>
  <div class="img-item">
    <img
      class="img"
      :src="srcImage"
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
  data: () => ({ observer: null, intersected: false }),
  computed: {
    srcImage() {
      return this.intersected ? this.src : '';
    },
  },
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      const image = entries[0];
      if (image.isIntersecting) {
        this.intersected = true;
      }
    });
    this.observer.observe(this.$el);
  },
});
</script>

<style scoped>
  .img-item {
  width: 300px;
  height: 400px;
  border-radius: 4px;
  overflow: hidden;
  }
  .img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  }
</style>
