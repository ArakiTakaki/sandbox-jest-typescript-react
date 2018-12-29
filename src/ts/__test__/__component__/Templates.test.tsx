/// <reference types="jest" />
import '../../setupTests';
import * as React from 'react';
import renderer from 'react-test-renderer';

import TodoMock from '../TodoMock';
import { shallow, mount } from 'enzyme';
import IndexTemplate from '../../components/templates/IndexTemplate/IndexTemplate';
import { enzymeIDContents } from '../../components/organisms/TodoInput/TodoInput';

let mock = [...TodoMock];

const props = {
  todoList: mock,
  addTodoEvent(name: string): void {
    console.log(name);
  },
  onDeleteTodo(idx: number): void {
    console.log(idx);
  },
  onCompleted(idx: number): void {
    console.log(idx);
  },
  onChangeName(idx: number): void {
    console.log(idx);
  },
};

const c = <IndexTemplate {...props} />;
test('IndexTemplateSnapShot', () => {
  const component = renderer.create(c);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
