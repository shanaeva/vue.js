<template>
  <h2 class="circle">
    {{ value }}
  </h2>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Rating',
  props: { value: { type: String, require: true, default: '' } },
});

</script>

<style scoped>
  .circle {
    width: 70px;
    height: 70px;
    border: 1px solid #ffffff;
    color: #a1e66f;
    border-radius: 50%;
    text-align: center;
    line-height: 70px;
  }
</style>
