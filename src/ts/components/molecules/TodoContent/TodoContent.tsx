import React from 'react';
import InputText from '../../atoms/InputText/InputText';
import CheckBox from '~/components/atoms/CheckBox/CheckBox';
import CrossButton from '~/components/atoms/CrossButton/CrossButton';
const styles = require('./TodoContent.sass');

interface Props {
  children: string;
  checked?: boolean;
  onDelete?: React.MouseEventHandler;
  onCheck?: React.MouseEventHandler;
  value?: any;
}
const TodoContent = (props: Props) => {
  return (
    <div className={styles.root}>
      <form>
        <CheckBox onCheck={props.onCheck} />
        <p>
          {false ? (
            <span className={styles.typography}>{props.children}</span>
          ) : (
            <InputText value={props.children} />
          )}
        </p>
        <CrossButton onClick={props.onDelete} />
      </form>
    </div>
  );
};

export default TodoContent;
