import { shallowMount } from '@vue/test-utils';
import ShortInfo from '@/components/ShortInfo.vue';

describe('ShortInfo', () => {
  it('render', () => {
    const wrapper = shallowMount(ShortInfo, { props: { infoList: [{ value: 1, description: 'year' }] } });
    expect(wrapper.props().infoList).toStrictEqual([{ value: 1, description: 'year' }]);
  });
  it('render correctly', () => {
    const wrapper = shallowMount(ShortInfo, { props: { infoList: [{ value: 1, description: 'year' }] } });
    expect(wrapper.vm.$el).toMatchSnapshot();
  });
});
