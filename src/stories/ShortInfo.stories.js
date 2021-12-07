import ShortInfo from '../components/ShortInfo.vue';

export default {
  title: 'Components/ShortInfo',
  component: ShortInfo,
};

const Template = (args) => ({
  components: { ShortInfo },
  setup() {
    return { args };
  },
  template: '<ShortInfo v-bind="args"/>',
});

export const DateAndTime = Template.bind({});

DateAndTime.args = {
  infoList: [{
    value: '1995',
    description: 'year',
  }, {
    value: '154',
    description: 'min',
  }],
};
