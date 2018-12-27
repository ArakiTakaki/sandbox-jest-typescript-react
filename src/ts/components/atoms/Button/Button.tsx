import React from 'react';
import styles from './style.sass';

interface Props {
  children: any;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
  testID?: string;
}
const Button = (props: Props) => {
  return (
    <div>
      <button onClick={props.onClick} onSubmit={props.onSubmit} className={styles.my_button} data-test={props.testID}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
