import React from 'react';
import { Todo } from '~/store/model';
import TodoContent from '~/components/molecules/TodoContent/TodoContent';

const styles = require('./TodoList.sass');
interface Props {
  todoList: Todo[];
  onDeleteTodo: React.MouseEventHandler;
  onBlur?: React.FocusEventHandler;
  onCompleted: React.MouseEventHandler;
}
interface State {}
class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const { todoList, onDeleteTodo, onBlur, onCompleted } = this.props;
    return (
      <div className={styles.root}>
        {todoList.map((todo: Todo, idx: number) => (
          <div className={styles.todo} key={idx}>
            <TodoContent
              checked={todo.completed}
              onDelete={onDeleteTodo}
              value={idx}
              onBlur={onBlur}
              dataID={idx}
              onCompleted={onCompleted}
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
