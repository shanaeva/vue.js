import { shallowMount } from '@vue/test-utils';
import Rating from '@/components/Rating.vue';

describe('Rating', () => {
  it('render', () => {
    const wrapper = shallowMount(Rating, { props: { value: 7 } });
    expect(wrapper.props().value).toBe(7);
  });
  it('render correctly', () => {
    const wrapper = shallowMount(Rating);
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
