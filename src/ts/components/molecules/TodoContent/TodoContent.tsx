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
          <InputText
            defaultValue={props.children}
            onBlur={props.onBlur}
            dataID={props.dataID}
            error
          />
        )}
      </div>
      <CrossButton onClick={props.onDelete} value={props.value} />
    </div>
  );
};

export default TodoContent;
