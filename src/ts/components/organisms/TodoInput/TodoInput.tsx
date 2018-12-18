import React, {
  FormEventHandler,
  MouseEventHandler,
  KeyboardEventHandler
} from 'react';
import InputText from '~/components/atoms/InputText/InputText';

const styles = require('./Style.sass');

interface Props {
  onChangeInput: FormEventHandler;
  addTodoEvent: MouseEventHandler;
  inputTodo: string;
}
const TodoInput = (props: Props) => {
  return (
    <div className={styles.root}>
      <div>
        <InputText onInput={props.onChangeInput} value={props.inputTodo} />
      </div>
      <div>
        <button onClick={props.addTodoEvent}>add</button>
      </div>
    </div>
  );
};

export default TodoInput;
