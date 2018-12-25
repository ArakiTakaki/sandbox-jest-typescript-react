import { StateType, initialState } from './initialState';
import { ActionTypes, BaseAction } from './actions';
import { findIndex } from 'lodash';
import { Todo } from './model';

/**
 * TodoListを編集し、新たなオブジェクトとして返却するメソッド
 * @param baseTodoList 元となるTodoList
 * @param editTodo 編集後のTodo
 */
const editByTodo = (baseTodoList: Todo[], editTodo: Todo) => {
  const idx = findIndex(baseTodoList, baseTodo => baseTodo.id === editTodo.id);
  if (idx === -1) return baseTodoList;
  const editTodoList = baseTodoList.slice();
  editTodoList[idx] = editTodo;
  return editTodoList;
};

const reducer = (state: StateType = initialState, action: BaseAction): StateType => {
  const { payload } = action;
  switch (action.type) {
    case ActionTypes.INCREMENT_COUNTER:
      return { ...state, count: state.count + payload };
    case ActionTypes.DECREMENT_COUNTER:
      return { ...state, count: state.count - payload };
    case ActionTypes.TODO_ADD:
      return { ...state, todo_list: [...state.todo_list, payload] };
    case ActionTypes.TODO_DELETE:
      const filteredTodoList = state.todo_list.filter(item => item.id !== payload.id);
      return { ...state, todo_list: filteredTodoList };
    case ActionTypes.TODO_EDIT:
      return { ...state, todo_list: editByTodo(state.todo_list, payload) };
    default:
      return state;
  }
};

export default reducer;
