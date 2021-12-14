<template>
  <button
    class="basic-button"
    :disabled="disabled"
    @click="click"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BasicButton',
  props: {
    disabled: { type: Boolean, require: false },
  },
  emits: ['click'],
  methods: {
    click() {
      this.$emit('click');
    },
  },
});
</script>

<style scoped>
  .basic-button {
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
  .basic-button:hover {
    background: #bb3440;
  }
  .basic-button:disabled {
    background: #9b9494;
  }
</style>
