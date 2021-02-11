import Vue from 'vue';
import Vuex from 'vuex';
import { loadState } from './utils';
import { Store, todo } from './types';

Vue.use(Vuex);

export const store = new Vuex.Store<Store>({
  state: {
    todos: [],
    filterString: '',
  },
  mutations: {
    initialiseStore(state) {
      state.todos = loadState();
    },
    add({ todos }, text: string) {
      const lastId = todos.reduce((max, todo) => (max < todo.id ? todo.id : max), 0);
      todos.unshift({ text, id: lastId + 1, completed: false });
    },
    delete(state, id: number) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    complete(state, payload: Pick<todo, 'id' | 'completed'>) {
      const findTodo = state.todos.find((todo) => todo.id === payload.id)!;
      findTodo.completed = payload.completed;
      state.todos = state.todos.filter((todo) => todo.id !== payload.id).concat(findTodo);
    },
    updateText({ todos }, payload: Pick<todo, 'id' | 'text'>) {
      const findTodo = todos.find((todo) => todo.id === payload.id)!;
      findTodo.text = payload.text;
    },
    setFilterString(state, filterString: string) {
      state.filterString = filterString.trim();
    },
  },
});
