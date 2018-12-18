import React from 'react';
import { Todo } from '~/store/model';
import TodoList from '~/components/organisms/TodoList/TodoList';
import TodoInput from '~/components/organisms/TodoInput/TodoInput';

interface Props {
  onChangeInput: React.FormEventHandler;
  inputTodo: string;
  todoList: Todo[];
  addTodoEvent: React.MouseEventHandler;
  onChangeCompleted: React.FormEventHandler;
  onDeleteTodo: React.MouseEventHandler;
}
interface State {}
class IndexTemplate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const {
      todoList,
      inputTodo,
      onChangeInput,
      addTodoEvent,
      onChangeCompleted,
      onDeleteTodo
    } = this.props;
    return (
      <div>
        <TodoInput
          onChangeInput={onChangeInput}
          addTodoEvent={addTodoEvent}
          inputTodo={inputTodo}
        />
        <TodoList
          todoList={todoList}
          onChangeCompleted={onChangeCompleted}
          onDeleteTodo={onDeleteTodo}
        />
      </div>
    );
  }
}

export default IndexTemplate;
