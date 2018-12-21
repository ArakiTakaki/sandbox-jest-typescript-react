import React, { ChangeEvent, MouseEvent } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { StateType } from '../../store/initialState';
import { hot } from 'react-hot-loader';
import IndexTemplate from '../../components/templates/IndexTemplate/IndexTemplate';
import { todoAddAmount, todoEditAmount, todoDeleteAmount, incrementAmount } from '../../store/actions';
import { Todo } from '../../store/model';

interface Props {
  store: StateType;
  dispatch: Dispatch;
}
interface State {
  inputTodo: string;
}
@hot(module)
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.addTodoEvent = this.addTodoEvent.bind(this);
    this.deleteTodoEvent = this.deleteTodoEvent.bind(this);
    this.onChangeTodoName = this.onChangeTodoName.bind(this);
    this.changeTodoCompleted = this.changeTodoCompleted.bind(this);
  }
  public render() {
    const { store } = this.props;
    return (
      <div>
        <IndexTemplate
          todoList={store.todo_list}
          addTodoEvent={this.addTodoEvent}
          onDeleteTodo={this.deleteTodoEvent}
          onChangeName={this.onChangeTodoName}
          onCompleted={this.changeTodoCompleted}
        />
      </div>
    );
  }

  private addTodoEvent(content: string) {
    const { dispatch, store } = this.props;
    const todoModel: Todo = {
      id: store.count,
      name: content,
      completed: false,
    };
    dispatch(incrementAmount(1));
    dispatch(todoAddAmount(todoModel));
  }

  private onChangeTodoName(idx: number, name: string) {
    const prevState = this.props.store.todo_list[idx];
    const editTodo: Todo = {
      name,
      id: prevState.id,
      completed: prevState.completed,
    };
    this.props.dispatch(todoEditAmount(editTodo));
  }

  private changeTodoCompleted(idx: number) {
    const { id, name, completed } = this.props.store.todo_list[idx];
    const editTodo: Todo = { id, name, completed: !completed };
    this.props.dispatch(todoEditAmount(editTodo));
  }

  private deleteTodoEvent(idx: number) {
    const { id, name, completed } = this.props.store.todo_list[idx];
    const deleteTodo: Todo = { id, name, completed: !completed };
    this.props.dispatch(todoDeleteAmount(deleteTodo));
  }
}

const connectToComponent = connect((state: StateType) => ({ store: state }))(Index);
export default connectToComponent;
