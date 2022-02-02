import { shallowMount } from '@vue/test-utils';
import BaseToggle from '@/components/BaseToggle.vue';

describe('BaseToggle', () => {
  it('render', () => {
    const wrapper = shallowMount(BaseToggle, { props: { label: 'search by', buttonPrimary: 'title', buttonSecondary: 'genre' } });
    expect(wrapper.props()).toStrictEqual({ label: 'search by', buttonPrimary: 'title', buttonSecondary: 'genre' });
  });
  it('render correctly', () => {
    const wrapper = shallowMount(BaseToggle, { props: { label: 'search by', buttonPrimary: 'title', buttonSecondary: 'genre' } });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
