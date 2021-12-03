<template>
  <input
    type="text"
    class="input"
    :value="value"
    :disabled="isDisable"
    @input="updateInput"
  >
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputField',
  props: {
    isDisable: {
      type: Boolean,
      require: false,
      default: false,
    },
    value: { type: [String, Number], require: true },
  },
  methods: {
    updateInput(event) {
      this.$emit('update:value', event.target.value);
    },
  },
});
</script>

<style scoped>
  .input {
    padding: 16px;
    max-height: 60px;
    width: 100%;
    background-color: #424242;
    border-radius: 4px;
    border: none;
    color: #ffffff;
  }
  .input:focus-visible {
    border: none;
    outline: 1px solid #232323;
  }
</style>
