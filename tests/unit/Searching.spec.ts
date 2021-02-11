import { mount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import Searching from '@/components/Searching.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('Searching.vue', () => {
  let mutations = {
    setFilterString: jest.fn(),
  };
  let store = new Vuex.Store({ mutations });

  it('should dispatch todo create', () => {
    const wrapper = mount(Searching, { store, localVue });
    const input = wrapper.find('input');
    (input.element as HTMLInputElement).value = 'search todo';
    input.trigger('change');
    input.trigger('keydown.enter');
    expect(mutations.setFilterString).toHaveBeenCalled();
  });
});
