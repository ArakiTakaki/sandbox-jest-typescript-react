import React from 'react';
import { Todo } from '~/store/model';
import TodoList from '~/components/organisms/TodoList/TodoList';
import TodoInput from '~/components/organisms/TodoInput/TodoInput';

interface Props {
  onChangeInput: React.FormEventHandler;
  inputTodo: string;
  todoList: Todo[];
  addTodoEvent: React.MouseEventHandler;
  onDeleteTodo: React.MouseEventHandler;
  onBlur: React.FocusEventHandler;
  onCompleted: React.MouseEventHandler;
}
interface State {}
class IndexTemplate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    //
    const { todoList, inputTodo, onChangeInput, addTodoEvent, onBlur, onCompleted, onDeleteTodo } = this.props;
    return (
      <div>
        <div>
          <TodoInput onChangeInput={onChangeInput} addTodoEvent={addTodoEvent} inputTodo={inputTodo} />
        </div>
        <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} onBlur={onBlur} onCompleted={onCompleted} />
      </div>
    );
  }
}

export default IndexTemplate;
