/// <reference types="jest" />
import * as React from 'react';
import '../../setupTests';
import { mount } from 'enzyme';
import TodoInput from '../../components/organisms/TodoInput/TodoInput';
import TodoList from '../../components/organisms/TodoList/TodoList';
import TodoMock from '../TodoMock';

/**
 * TodoInput
 */
const addTodoTestCase = 'test add todo event';
const todoInputProps = {
  addTodoEvent(name: string): void {
    expect(name).toBe(addTodoTestCase);
  },
};
test('Add Todo Event', () => {
  const wrapper = mount(<TodoInput {...todoInputProps} />);
  const instance = wrapper.instance() as TodoInput;
  const event: any = { currentTarget: { value: addTodoTestCase } };
  instance.onChange(event);
  instance.addTodoHandle();
});

/**
 * TodoContent
 */
const selectTodo = '1';
const changeTodo = 'todo';
let todo = [...TodoMock];
const todoContentProps = {
  todoList: todo,
  onDeleteTodo(idx: number): void {
    expect(todo[idx]).toBe(todo[Number(selectTodo)]);
  },
  onCompleted(idx: number): void {
    expect(todo[idx]).toBe(todo[Number(selectTodo)]);
  },
  onChangeName(idx: number, name: string): void {
    expect(todo[idx]).toBe(todo[Number(selectTodo)]);
    expect(name).toBe(changeTodo);
  },
};
test('Todo List Event', () => {
  let wrapper = mount(<TodoList {...todoContentProps} />);
  const instance = wrapper.instance() as TodoList;

  /**
   * onDeleteのテスト
   */
  const onDeleteSuccessCase: any = { currentTarget: { value: selectTodo } };
  instance.onDelete(onDeleteSuccessCase);

  /**
   * onCompletedEventのテスト
   */
  const onCompletedSuccessCase: any = { currentTarget: { value: selectTodo } };
  instance.onCompletedEvent(onCompletedSuccessCase);

  /**
   * onBlurのテスト
   */
  const onBlurSuccessCase: any = { currentTarget: { value: changeTodo, dataset: { id: selectTodo } } };
  instance.onBlur(onBlurSuccessCase);
});
