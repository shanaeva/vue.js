import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import SearchInput from '@/containers/SearchInput.vue';

describe('SearchInput', () => {
  const findFilmMock = jest.fn();

  const store = createStore({
    actions: {
      findFilm: findFilmMock,
    },
  });
  const wrapper = shallowMount(SearchInput, { store });

  it('renders', () => {
    console.log(wrapper.html());
  });
  it('search', () => {
    const input = wrapper.find('.aqa-input-field');
    const button = wrapper.find('.aqa-basic-button');

    console.log(input.html());
    console.log(button.html());

    input.element.value = 'film';
    button.trigger('click');

    expect(findFilmMock.mock.calls[0][1]).toBe('film');
  });
});
