import React from 'react';
const styles = require('./CheckBox.sass');

interface Props {
  label?: string;
  checked?: boolean;
  onCheck?: React.MouseEventHandler;
  value?: any;
}
const CheckBox = (props: Props) => {
  return (
    <div>
      <label>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={props.checked}
          onClick={props.onCheck}
          value={props.value}
        />
        <div className={styles.icon} />
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
