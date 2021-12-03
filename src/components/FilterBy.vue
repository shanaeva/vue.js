<template>
  <div
    class="sorter"
    :class="{ end: isRight }"
  >
    <p class="label">
      {{ label }}
    </p>
    <button
      class="button"
      :class="{ active: isActiveDate}"
      @click="primaryClick"
    >
      {{ buttonPrimary.name }}
    </button>
    <button
      class="button"
      :class="{ active: isActiveRating }"
      @click="secondaryClick"
    >
      {{ buttonSecondary.name }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

type ButtonType = {
  name: string,
  method: ()=> void,
  isActive: boolean,
};

export default defineComponent({
  name: 'FilterBy',
  props: {
    label: { type: String, required: true },
    buttonPrimary: { type: Object as PropType<ButtonType>, required: true },
    buttonSecondary: { type: Object as PropType<ButtonType>, required: true },
    isRight: {
      type: Boolean, require: false,
    },
  },
  data: () => ({ isActiveDate: true, isActiveRating: false }),
  methods: {
    primaryClick() {
      this.buttonPrimary.method();
      this.isActiveDate = true;
      this.isActiveRating = false;
    },
    secondaryClick() {
      this.buttonSecondary.method();
      this.isActiveDate = false;
      this.isActiveRating = true;
    },
  },
});
</script>

<style scoped>
  .sorter {
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
