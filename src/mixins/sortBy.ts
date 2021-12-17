import { defineComponent } from 'vue';
import { CardType } from '@/types';

export default defineComponent({
  emits: ['sort'],
  methods: {
    sortAscending(films: Array<CardType>, key: string) {
      // @ts-ignore
      const newCards = films.sort((a, b) => b[key] - a[key]);
      return this.$emit('sort', newCards);
    },
  },
});
