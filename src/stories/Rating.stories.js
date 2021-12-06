import Rating from '../components/Rating.vue';

export default {
  title: 'Components/Rating',
  component: Rating,
};

const Template = (args) => ({
  components: { Rating },
  setup() {
    return { args };
  },
  template: '<div style="background-color: #555555; padding: 10px"><Rating v-bind="args"/></div>',
});

export const Default = Template.bind({});

Default.args = {
  value: '7,8',
};
