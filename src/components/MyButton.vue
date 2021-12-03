<template>
  <button
    class="button"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyButton',
  props: {
    onClick: { type: Function as ()=> void, require: true },
    disabled: { type: Boolean, require: false },
  },
});
</script>

<style scoped>
  .button {
    max-height: 60px;
    width: 220px;
    padding: 16px 56px;
    color: #ffffff;
    background: #f65261;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
  }
  .button:hover {
    background: #bb3440;
  }
  .button:disabled {
    background: #9b9494;
  }
</style>
