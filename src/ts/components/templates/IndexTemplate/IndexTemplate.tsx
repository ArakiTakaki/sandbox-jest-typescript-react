import React from 'react';
import { Todo } from '../../../store/model';
import TodoList from '../../organisms/TodoList/TodoList';
import TodoInput from '../../organisms/TodoInput/TodoInput';
import styles from './style.sass';

interface Props {
  todoList: Todo[];
  addTodoEvent(name: string): void;
  onDeleteTodo(idx: number): void;
  onCompleted(idx: number): void;
  onChangeName(idx: number, name: string): void;
}
interface State {}
class IndexTemplate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  public render() {
    // TODO あとでなんとかする
    const { todoList, addTodoEvent, onChangeName, onCompleted, onDeleteTodo } = this.props;
    return (
      <div>
        <div className={styles.input}>
          <TodoInput addTodoEvent={addTodoEvent} />
        </div>
        <div className={styles.content}>
          <TodoList
            todoList={todoList}
            onDeleteTodo={onDeleteTodo}
            onChangeName={onChangeName}
            onCompleted={onCompleted}
          />
        </div>
      </div>
    );
  }
}

export default IndexTemplate;
