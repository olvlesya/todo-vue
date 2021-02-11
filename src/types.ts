export type todo = { id: number; text: string; completed: boolean };

export type Store = {
  todos: todo[];
  filterString: string;
};
