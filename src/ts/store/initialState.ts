import { Todo } from './model';
export interface StateType {
  count: number;
  name: string;
  todo_list: Todo[];
}
export const initialState: StateType = {
  count: 1,
  name: 'GUEST',
  todo_list: [
    {
      id: 0,
      name: 'sample todo',
      completed: false,
    },
  ],
};
