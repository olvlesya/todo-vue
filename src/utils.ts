import { Store } from './types';

const storeKey = 'vue-todos-state';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(storeKey);
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState).todos;
  } catch (err) {
    return [];
  }
};

export const saveState = (state: Pick<Store, 'todos'>) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storeKey, serializedState);
  } catch {
    // ignore write errors
  }
};
