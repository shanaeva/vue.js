import FilterBy from '../components/FilterBy.vue';

export default {
  title: 'Components/FilterBy',
  component: FilterBy,
};

const Template = (args) => ({
  components: { FilterBy },
  setup() {
    return { args };
  },
  template: '<div style="background-color: #555555; padding: 10px"><FilterBy v-bind="args"/></div>',
});

export const Default = Template.bind({});

Default.args = {
  label: 'Find by',
  buttonPrimary: { name: 'Name', method: () => { console.log('click on name'); } },
  buttonSecondary: { name: 'Date', method: () => { console.log('click on date'); } },
};
