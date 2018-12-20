import React, {
  FormEventHandler,
  MouseEventHandler,
} from 'react';
import InputText from '~/components/atoms/InputText/InputText';
import Button from '~/components/atoms/Button/Button';

const styles = require('./TodoInput.sass');

interface Props {
  onChangeInput: FormEventHandler;
  addTodoEvent: MouseEventHandler;
  inputTodo: string;
}
const TodoInput = (props: Props) => {
  return (
    <div className={styles.root}>
      <InputText onChange={props.onChangeInput} value={props.inputTodo} />
      <Button onClick={props.addTodoEvent}>add</Button>
    </div>
  );
};

export default TodoInput;
