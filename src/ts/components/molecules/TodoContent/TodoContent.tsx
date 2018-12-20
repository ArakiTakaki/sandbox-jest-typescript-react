import React from 'react';
import InputText from '../../atoms/InputText/InputText';
import CheckBox from '../../atoms/CheckBox/CheckBox';
import CrossButton from '../../atoms/CrossButton/CrossButton';
import styles from './style';

interface Props {
  children: string;
  checked?: boolean;
  onDelete?: React.MouseEventHandler;
  onCheck?: React.MouseEventHandler;
  value?: any;
  onBlur?: React.FocusEventHandler;
  dataID?: any;
  onCompleted?: React.MouseEventHandler;
}
const TodoContent = (props: Props) => {
  return (
    <div className={styles.root}>
      <CheckBox onCheck={props.onCompleted} value={props.dataID} />
      <div className={styles.inputText}>
        {false ? (
          <p className={styles.typography}>{props.children}</p>
        ) : (
          <InputText defaultValue={props.children} onBlur={props.onBlur} dataID={props.dataID} />
        )}
      </div>
      <CrossButton onClick={props.onDelete} value={props.value} />
    </div>
  );
};

export default TodoContent;
