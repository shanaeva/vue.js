import ImageItem from '../components/ImageItem.vue';
import KillBill from '../../public/KillBill.jpg';

export default {
  title: 'Components/Image',
  component: ImageItem,
};

const Template = (args) => ({
  components: { ImageItem },
  setup() {
    return { args };
  },
  template: '<ImageItem v-bind="args"/>',
});

export const Image = Template.bind({});

Image.args = {
  src: KillBill,
};
