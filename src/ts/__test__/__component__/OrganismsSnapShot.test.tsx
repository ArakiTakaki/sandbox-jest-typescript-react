/// <reference types="jest" />
import * as React from 'react';
import renderer from 'react-test-renderer';
import TodoList from '../../components/organisms/TodoList/TodoList';
import MOCK from './TodoModel';
import TodoInput from '../../components/organisms/TodoInput/TodoInput';
let mock = [...MOCK];

const indexProps = {
  todoList: mock,
  onDeleteTodo(idx: number): void {
    mock = mock.filter(item => item.id !== mock[idx].id);
    console.log(mock);
  },
  onCompleted(idx: number): void {
    console.log('accept onCompleted');
    console.log(idx);
  },
  onChangeName(idx: number, name: string): void {
    console.log(idx, name);
  },
};

test('TodoInput SnapShot', () => {
  const c = <TodoList {...indexProps} />;
  const component = renderer.create(c);
  expect(component.toJSON()).toMatchSnapshot();
});

const tProps = {
  addTodoEvent(name: string): void {},
};
test('TodoInput SnapShot', () => {
  const c = <TodoInput {...tProps} />;
  const component = renderer.create(c);
  expect(component.toJSON()).toMatchSnapshot();
});
