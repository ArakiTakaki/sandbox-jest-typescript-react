import React from 'react';
import InputText from '../../atoms/InputText/InputText';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import CrossButton from '../../atoms/CrossButton/CrossButton';
import styles from './style.sass';

interface Props {
  children: string;
  checked?: boolean;
  onDelete?: React.MouseEventHandler;
  onCheck?: React.MouseEventHandler;
  value?: any;
  onBlur?: React.FocusEventHandler;
  idx?: number;
  onCompleted?: React.ChangeEventHandler;
}
const TodoContent = (props: Props) => {
  return (
    <div className={styles.root}>
      <CheckBox onCheck={props.onCompleted} value={props.idx} checked={props.checked} />
      <div className={styles.inputText}>
        {false ? (
          <p className={styles.typography}>{props.children}</p>
        ) : (
          <InputText defaultValue={props.children} onBlur={props.onBlur} dataID={props.idx} />
        )}
      </div>
      <CrossButton onClick={props.onDelete} value={props.idx} />
    </div>
  );
};

// export default React.memo(TodoContent);
export default TodoContent;
