import { defineComponent } from 'vue';

export default defineComponent({
  mounted(el, binding) {
    el.style.background = binding.value;
    el.style.padding = '90px 58px 90px 58px';
    el.style.backdropFilter = 'blur(1px)';
  },
});
