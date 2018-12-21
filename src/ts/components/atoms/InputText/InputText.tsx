import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './style';

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
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  borderBottom?: boolean;
}
const InputText = (props: Props) => {
  const input = classNames(styles.input, { [styles.error]: props.error }, { [styles.bottom]: props.borderBottom });
  return (
    <div className={styles.root}>
      <label>
        {props.label}
        <input
          type={'text'}
          disabled={props.disabled}
          className={input}
          defaultValue={props.defaultValue}
          value={props.onChange ? props.value : undefined}
          onInput={props.onInput}
          onChange={props.onChange}
          onClick={props.onClick}
          onSubmit={props.onSubmit}
          onBlur={props.onBlur}
          onFocus={props.onFocus}
          data-id={props.dataID}
        />
        <div className={styles.border} />
      </label>
    </div>
  );
};

export default InputText;
