import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import ImageItem from '@/components/ImageItem.vue';
import KillBill from '../../public/KillBill.jpg';

const intersectionObserverMock = () => ({
  observe: () => null,
  intersected: true,
});

window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);

describe('ImageItem', () => {
  const store = createStore({
    actions: {
      intersectionObserverMock,
    },
  });

  it('render', () => {
    const wrapper = shallowMount(ImageItem, { props: { src: KillBill }, store });
    expect(wrapper.props().src).toBe(KillBill);
  });
  it('render correctly', () => {
    const wrapper = shallowMount(ImageItem, { props: { src: KillBill } });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
