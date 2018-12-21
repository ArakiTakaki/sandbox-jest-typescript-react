import React from 'react';
import { Todo } from '../../../store/model';
import TodoList from '../../organisms/TodoList/TodoList';
import TodoInput from '../../organisms/TodoInput/TodoInput';
import styles from './style';

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
  public render() {
    const { todoList, inputTodo, onChangeInput, addTodoEvent, onBlur, onCompleted, onDeleteTodo } = this.props;
    return (
      <div>
        <div className={styles.input}>
          <TodoInput onChangeInput={onChangeInput} addTodoEvent={addTodoEvent} inputTodo={inputTodo} />
        </div>
        <div className={styles.content}>
          <TodoList todoList={todoList} onDeleteTodo={onDeleteTodo} onBlur={onBlur} onCompleted={onCompleted} />
        </div>
      </div>
    );
  }
}

export default IndexTemplate;
