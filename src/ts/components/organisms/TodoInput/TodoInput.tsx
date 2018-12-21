import React, { FormEventHandler, MouseEventHandler } from 'react';
import InputText from '../../atoms/InputText/InputText';
import Button from '../../atoms/Button/Button';
import styles from './style';

interface Props {
  onChangeInput: FormEventHandler;
  addTodoEvent: MouseEventHandler;
  inputTodo: string;
}
const TodoInput = (props: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.inputContent}>
        <InputText onChange={props.onChangeInput} value={props.inputTodo} borderBottom />
      </div>
      <div className={styles.button}>
        <Button onClick={props.addTodoEvent}>add</Button>
      </div>
    </div>
  );
};

export default TodoInput;
