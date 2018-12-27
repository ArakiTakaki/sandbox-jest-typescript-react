import React from 'react';
import styles from './style.sass';

interface Props {
  label?: string;
  checked?: boolean;
  onCheck?: React.ChangeEventHandler;
  value?: any;
}
const CheckBox = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type={'checkbox'}
          className={styles.checkbox}
          checked={props.checked}
          onChange={props.onCheck}
          value={props.value}
        />
        <div className={styles.icon} />
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
