import React from 'react';
import { Todo } from '~/store/model';
import TodoContent from '~/components/molecules/TodoContent/TodoContent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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
    this.state = {};
    this.onChange = this.onChange.bind(this);
  }
  private onChange(event: React.FocusEvent<HTMLInputElement>) {
    const {
      value,
      dataset: { id },
    } = event.currentTarget;
    if (id == null) return;
    this.setState({ [id]: value });
  }

  render() {
    const { todoList, onDeleteTodo, onBlur, onCompleted } = this.props;
    return (
      <div className={styles.root}>
        <TransitionGroup component={'div'}>
          {todoList.map((todo: Todo, id: number) => (
            <CSSTransition key={todo.id} timeout={300} classNames={styles.list}>
              <div>
                <TodoContent
                  checked={todo.completed}
                  onDelete={onDeleteTodo}
                  onBlur={onBlur}
                  dataID={id}
                  onCompleted={onCompleted}
                >
                  {todo.name}
                </TodoContent>
              </div>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default TodoList;
