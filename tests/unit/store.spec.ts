import { store } from '../../src/store';

describe('store', () => {
  it('should add a todo', () => {
    const text = 'new todo';
    store.commit('add', text);
    const newTodo = store.state.todos[0];
    expect(store.state.todos).toHaveLength(1);
    expect(newTodo.text).toBe(text);
    expect(newTodo.completed).toBe(false);
    expect(newTodo.id).toBe(1);
  });

  it('should add todos to the beginning', () => {
    const text = 'new todo';
    store.commit('add', text);
    store.commit('add', text);
    expect(store.state.todos).toHaveLength(3);
    expect(store.state.todos[0].id).toBe(3);
  });

  it('should change todo state', () => {
    store.commit('complete', { id: 1, completed: true });
    expect(store.state.todos.find((todo) => todo.id === 1)?.completed).toBe(true);
    store.commit('complete', { id: 1, completed: false });
    expect(store.state.todos.find((todo) => todo.id === 1)?.completed).toBe(false);
  });

  it('should put completed todo in the end of array', () => {
    store.commit('complete', { id: 2, completed: true });
    expect(store.state.todos.findIndex((todo) => todo.id === 2)).toBe(2);
  });

  it('should change todo text', () => {
    const newText = 'some new text';
    store.commit('updateText', { id: 1, text: newText });
    expect(store.state.todos.find((todo) => todo.id === 1)?.text).toBe(newText);
  });

  it('should delete a todo', () => {
    const curLength = store.state.todos.length;
    store.commit('delete', 1);
    expect(store.state.todos.length).toBe(curLength - 1);
  });
});
