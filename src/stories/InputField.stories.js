import InputField from '../components/InputField.vue';

export default {
  title: 'Components/InputField',
  component: InputField,
};

const Template = (args) => ({
  components: { InputField },
  setup() {
    return { args };
  },
  template: '<div style="width: 300px"><InputField v-bind="args"/></div>',
});

export const Default = Template.bind({});

Default.args = {};
