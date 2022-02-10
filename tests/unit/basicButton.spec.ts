import { shallowMount } from '@vue/test-utils';
import BasicButton from '@/components/BasicButton.vue';

describe('BasicButton', () => {
  it('render', () => {
    const wrapper = shallowMount(BasicButton, { props: { disabled: false } });
    expect(wrapper.props().disabled).toBe(false);
  });
  it('render correctly', () => {
    const wrapper = shallowMount(BasicButton, { props: { disabled: false } });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
