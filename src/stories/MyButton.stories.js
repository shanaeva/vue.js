import MyButton from '../components/MyButton.vue';

export default {
  title: 'Components/Button',
  component: MyButton,
};

const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<MyButton v-bind="args">Create</MyButton>',
});

export const Primary = Template.bind({});

Primary.args = {};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
