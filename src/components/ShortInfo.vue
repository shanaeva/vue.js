<template>
  <div
    v-for="info in infoList"
    :key="info.description"
    class="short-info"
  >
    <p class="value">
      {{ info.value }}
    </p>
    <p class="description">
      {{ info.description }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type InfoType = {
  value: number,
  description: string,
};

export default defineComponent({
  name: 'ShortInfo',
  props: {
    infoList: { type: Array as PropType<Array<InfoType>>, required: true },
  },
});
</script>

<style scoped>
  .short-info{
    display: flex;
    align-items: flex-end;
    margin-right: 24px;
  }
  .value {
    margin-right: 6px;
    color: #f65261;
    font-size: 28px;
  }
  .description {
    color: #555555;
  }
</style>
