import { mount, createLocalVue } from '@vue/test-utils';
import Vuex, { Store } from 'vuex';
import ControlPanel from '@/components/ControlPanel.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

describe('ControlPanel.vue', () => {
  let mutations = {
    add: jest.fn(),
  };
  let store = new Vuex.Store({ mutations });

  it('should dispatch todo create', () => {
    const wrapper = mount(ControlPanel, { store, localVue });
    const input = wrapper.find('input');
    (input.element as HTMLInputElement).value = 'new todo';
    input.trigger('change');
    input.trigger('keydown.enter');
    expect(mutations.add).toHaveBeenCalled();
  });
});
