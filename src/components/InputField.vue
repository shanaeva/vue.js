<template>
  <input
    type="text"
    class="input-field aqa-input-field"
    :value="modelValue"
    :disabled="isDisable"
    @input="updateInput"
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'InputField',
  props: {
    modelValue: { type: [String, Number], required: true },
    isDisable: {
      type: Boolean,
      require: false,
      default: false,
    },
  },
  emits: ['update:modelValue'],
  methods: {
    updateInput(event: {target: {value: string}}) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
});
</script>

<style scoped>
  .input-field {
    padding: 16px;
    max-height: 60px;
    width: 100%;
    background-color: #424242;
    border-radius: 4px;
    border: none;
    color: #ffffff;
  }
  .input-field:focus-visible {
    border: none;
    outline: 1px solid #232323;
  }
</style>
