<template>
  <div
    v-font:uppercase
    class="base-toggle"
  >
    <p class="label">
      {{ label }}
    </p>
    <button
      v-font:uppercase
      class="button aqa-button-first"
      :class="{ active: isFirstActive}"
      @click="primaryClick"
    >
      {{ buttonPrimary }}
    </button>
    <button
      v-font:uppercase
      class="button aqa-button-second"
      :class="{ active: !isFirstActive }"
      @click="secondaryClick"
    >
      {{ buttonSecondary }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseToggle',
  props: {
    label: { type: String, required: true },
    buttonPrimary: { type: String, required: true },
    buttonSecondary: { type: String, required: true },
  },
  emits: ['firstToggleClick', 'secondToggleClick'],
  data: () => ({ isFirstActive: true }),
  methods: {
    primaryClick() {
      this.$emit('firstToggleClick');
      this.isFirstActive = true;
    },
    secondaryClick() {
      this.$emit('secondToggleClick');
      this.isFirstActive = false;
    },
  },
});
</script>

<style scoped>
  .base-toggle {
    display: flex;
    align-items: center;
    color: #ffffff;
  }
  .label {
    margin-right: 20px;
  }
  .button {
    padding: 8px 30px;
    background: #424242;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
  .active {
    background: #f65261;
  }
</style>
