import React from 'react';
import styles from './style.sass';
import InputText from '../../atoms/InputText/InputText';
import Button from '../../atoms/Button/Button';

export const enzymeIDContents = {
  text: 'organisms_input_text',
  submit: 'organisms_submit_button',
};
interface Props {
  addTodoEvent?(name: string): void;
}
interface State {
  inputTodo: string;
}
class TodoInput extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { inputTodo: '' };
    this.addTodoHandle = this.addTodoHandle.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  public render() {
    return (
      <div className={styles.root}>
        <div className={styles.inputContent}>
          <InputText
            onChange={this.onChange}
            value={this.state.inputTodo}
            borderBottom={true}
            testID={enzymeIDContents.text}
          />
        </div>
        <div className={styles.button}>
          <Button onClick={this.addTodoHandle} testID={enzymeIDContents.submit}>
            add
          </Button>
        </div>
      </div>
    );
  }
  private addTodoHandle() {
    if (this.state.inputTodo === '') return;
    if (this.props.addTodoEvent == null) return;
    this.props.addTodoEvent(this.state.inputTodo);
    this.setState({ inputTodo: '' });
  }
  private onChange(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ inputTodo: event.currentTarget.value });
  }
}

// export default React.memo(TodoInput);
export default TodoInput;
