import { shallowMount } from '@vue/test-utils';
import InputField from '@/components/InputField.vue';

describe('InputField', () => {
  it('render', () => {
    const wrapper = shallowMount(InputField, { props: { isDisable: false, modelValue: 'text' } });
    expect(wrapper.props()).toStrictEqual({ isDisable: false, modelValue: 'text' });
  });
  it('render correctly', () => {
    const wrapper = shallowMount(InputField, { props: { isDisable: false, modelValue: 'text' } });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
  it('when enter text, input update', () => {
    const wrapper = shallowMount(InputField, { props: { isDisable: false, modelValue: 'text' } });
    wrapper.element.value = 'newValue';

    expect(wrapper.element.value).toBe('newValue');
  });
});
