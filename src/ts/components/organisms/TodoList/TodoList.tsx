import React from 'react';
import { Todo } from '../../../store/model';
import TodoContent from '../../molecules/TodoContent/TodoContent';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './style.sass';

interface Props {
  todoList: Todo[];
  onDeleteTodo?(idx: number): void;
  onCompleted?(idx: number): void;
  onChangeName?(idx: number, name: string): void;
}
interface State {}
class TodoList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.onDelete = this.onDelete.bind(this);
    this.onCompletedEvent = this.onCompletedEvent.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  public render() {
    const { todoList } = this.props;
    return (
      <div className={styles.root}>
        <TransitionGroup component={'div'} className={styles.list}>
          {todoList.map((todo: Todo, idx: number) => (
            <CSSTransition key={todo.id} timeout={300} classNames={styles.list}>
              <div>
                <TodoContent
                  checked={todo.completed}
                  onDelete={this.onDelete}
                  onBlur={this.onBlur}
                  idx={idx}
                  onCompleted={this.onCompletedEvent}
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
  public onDelete(e: React.MouseEvent<HTMLInputElement>) {
    const { onDeleteTodo } = this.props;
    if (onDeleteTodo == null) return;
    onDeleteTodo(Number(e.currentTarget.value));
  }
  public onBlur(e: React.FocusEvent<HTMLInputElement>) {
    const { onChangeName } = this.props;
    if (onChangeName == null) return;
    const {
      dataset: { id },
      value,
    } = e.currentTarget;
    onChangeName(Number(id), value);
  }
  public onCompletedEvent(e: React.ChangeEvent<HTMLInputElement>) {
    const { onCompleted } = this.props;
    if (onCompleted == null) return;
    onCompleted(Number(e.currentTarget.value));
  }
}

export default TodoList;
// export default React.memo(TodoList);
