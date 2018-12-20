import React from 'react';
const styles = require('./InputText.sass');

interface Props {
  label?: string;
  defaultValue?: any;
  value?: any;
  onInput?: React.FormEventHandler;
  onChange?: React.ChangeEventHandler;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
  onBlur?: React.FocusEventHandler;
  onFocus?: React.FocusEventHandler;
  dataID?: any;
  fullWidth?: boolean;
}
const InputText = (props: Props) => {
  return (
    <div className={styles.root}>
      <label>
        {props.label}
        <input
          type='text'
          className={styles.input}
          defaultValue={props.defaultValue}
          value={props.value}
          onInput={props.onInput}
          onChange={props.onChange}
          onClick={props.onClick}
          onSubmit={props.onSubmit}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          data-id={props.dataID}
        />
        <div className={styles.border}></div>
      </label>
    </div>
  );
};

export default InputText;
