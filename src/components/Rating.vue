<template>
  <h2 class="rating">
    {{ value }}
  </h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rating',
  props: { value: { type: String, require: true, default: '' } },
});

</script>

<style scoped>
  .rating {
    width: 70px;
    height: 70px;
    border: 1px solid #ffffff;
    color: #a1e66f;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
  }
</style>
