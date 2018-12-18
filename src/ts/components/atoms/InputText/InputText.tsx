import React from 'react';
const styles = require('./InputText.sass');

interface Props {
  label?: string;
  value?: any;
  onInput?: React.FormEventHandler;
  onChange?: React.ChangeEventHandler;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
}
const InputText = (props: Props) => {
  return (
    <div className={styles.root}>
      <label>
        {props.label}
        <input
          type='text'
          className={styles.input}
          value={props.value}
          onInput={props.onInput}
          onChange={props.onChange}
          onClick={props.onClick}
          onSubmit={props.onSubmit}
        />
      </label>
    </div>
  );
};

export default InputText;
