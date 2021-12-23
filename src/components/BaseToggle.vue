<template>
  <div
    v-font:uppercase
    class="filter-by"
    :class="{ end: isRight }"
  >
    <p class="label">
      {{ label }}
    </p>
    <button
      v-font:uppercase
      class="button"
      :class="{ active: isFirstActive}"
      @click="primaryClick"
    >
      {{ buttonPrimary }}
    </button>
    <button
      v-font:uppercase
      class="button"
      :class="{ active: !isFirstActive }"
      @click="secondaryClick"
    >
      {{ buttonSecondary }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'BaseToggle',
  emits: ['firstToggleClick', 'secondToggleClick'],
  props: {
    label: { type: String, required: true },
    buttonPrimary: { type: String, required: true },
    buttonSecondary: { type: String, required: true },

  },
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
  .filter-by {
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
  .end {
    justify-content: flex-end;
  }
</style>
