import reducer from '../../store/reducer';
import { initialState } from '../../store/initialState';
import * as Actions from '../../store/actions';
import { Todo } from '~/store/model';
import TodoMock from '../TodoMock';

/**
 * storeを初期化するテスト
 */
test('init', () => {
  expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState);
});

/**
 * countを変更するタイプのテスト
 */
test('COUNT TESTER', () => {
  expect(reducer(initialState, Actions.incrementAmount(1))).toMatchObject({ count: 1 });
  expect(reducer(initialState, Actions.decrementAmount(1))).toMatchObject({ count: -1 });
});

/**
 * Todoまわりのテスト
 */
// 編集したstateをデフォルトのstateとして扱う
const editableState = { ...initialState, todo_list: [...TodoMock] };

// 特定のTODOを追加する命令
test('TODO ADD', () => {
  const newTodo: Todo = { id: 3, name: 'add todo test', completed: false };
  const addTodoState = reducer(editableState, Actions.todoAddAmount(newTodo));
  expect(addTodoState.todo_list).toContain(newTodo);
});

// 特定のTODOを編集する命令
test('TODO EDIT', () => {
  const editTodo: Todo = { id: 0, name: 'edit todo test', completed: true };
  const prevTodo = editableState.todo_list[0];
  const editTodoState = reducer(editableState, Actions.todoEditAmount(editTodo));
  expect(editTodoState.todo_list).toContain(editTodo);
  expect(editTodoState.todo_list).not.toContain(prevTodo);
});

// 特定のTODOを削除する命令
test('TODO DELETE', () => {
  const deleteTodo: Todo = editableState.todo_list[0];
  const deleteTodoState = reducer(editableState, Actions.todoDeleteAmount(deleteTodo));
  expect(deleteTodoState.todo_list).not.toContain(deleteTodo);
});
