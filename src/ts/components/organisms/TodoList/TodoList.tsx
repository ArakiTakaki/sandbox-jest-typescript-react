import React from 'react';
import { Todo } from '~/store/model';
import TodoContent from '~/components/molecules/TodoContent/TodoContent';

const styles = require('./TodoList.sass');
interface Props {
  todoList: Todo[];
  onChangeCompleted: React.FormEventHandler;
  onDeleteTodo: React.MouseEventHandler;
}
interface State {}
class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { todoList, onChangeCompleted, onDeleteTodo } = this.props;
    return (
      <div className={styles.root}>
        {todoList.map((todo: Todo, idx: number) => (
          <div className={styles.todo} key={idx}>
            <TodoContent
              checked={todo.completed}
              onCheck={onChangeCompleted}
              onDelete={onDeleteTodo}
              value={idx}
            >
              {todo.name}
            </TodoContent>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoList;
