import React, { ChangeEvent, MouseEvent, KeyboardEvent } from 'react';
import { connect } from 'react-redux';
import { StateType } from '~/store/initialState';
import { hot } from 'react-hot-loader';
import IndexTemplate from '~/components/templates/IndexTemplate/IndexTemplate';
import {
  todoAddAmount,
  todoEditAmount,
  todoDeleteAmount
} from '~/store/actions';
import { Todo } from '~/store/model';

interface Props {
  store: StateType;
  dispatch: Function;
}
interface State {
  inputTodo: string;
}
@hot(module)
class Index extends React.Component<Props, State> {
  todoID: number = 1;
  constructor(props: Props) {
    super(props);
    this.state = { inputTodo: '' };
    this.clickToMapping = this.clickToMapping.bind(this);
    this.addTodoEvent = this.addTodoEvent.bind(this);
    this.changeTodoContent = this.changeTodoContent.bind(this);
    this.deleteTodoEvent = this.deleteTodoEvent.bind(this);
    this.changeTodoCompleted = this.changeTodoCompleted.bind(this);
  }

  private clickToMapping(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ inputTodo: event.currentTarget.value });
  }

  private addTodoEvent() {
    if (this.state.inputTodo === '') return;
    const { dispatch } = this.props;
    const todoModel: Todo = {
      id: this.todoID++,
      name: this.state.inputTodo,
      completed: false
    };
    dispatch(todoAddAmount(todoModel));
    this.setState({ inputTodo: '' });
  }

  private changeTodoContent(event: React.FocusEvent<HTMLInputElement>) {
    const { id } = event.currentTarget.dataset;
    if (id == null) return;
    const prevState = this.props.store.todo_list[Number(id)];
    const editTodo: Todo = {
      id: Number(id),
      name: event.currentTarget.value,
      completed: prevState.completed
    };
    this.props.dispatch(todoEditAmount(editTodo));
  }

  private changeTodoCompleted(event: MouseEvent<HTMLInputElement>) {
    const { value } = event.currentTarget;
    if (value == null) return;
    const prevState = this.props.store.todo_list[Number(value)];
    const editTodo: Todo = {
      id: Number(value),
      name: prevState.name,
      completed: !prevState.completed
    };
    this.props.dispatch(todoEditAmount(editTodo));
  }

  private deleteTodoEvent(event: MouseEvent<HTMLInputElement>) {
    const idx = Number(event.currentTarget.value);
    const deleteTodo: Todo = this.props.store.todo_list[idx];
    this.props.dispatch(todoDeleteAmount(deleteTodo));
  }

  public render() {
    const { store, dispatch } = this.props;
    return (
      <div>
        <IndexTemplate
          inputTodo={this.state.inputTodo}
          onChangeInput={this.clickToMapping}
          todoList={store.todo_list}
          addTodoEvent={this.addTodoEvent}
          onDeleteTodo={this.deleteTodoEvent}
          onBlur={this.changeTodoContent}
          onCompleted={this.changeTodoCompleted}
        />
      </div>
    );
  }
}

const connectToComponent = connect((state: StateType) => ({ store: state }))(
  Index
);
export default connectToComponent;
