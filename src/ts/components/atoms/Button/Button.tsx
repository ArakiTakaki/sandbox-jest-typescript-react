import React from 'react';
import styles from './style';

interface Props {
  children: any;
  onClick?: React.MouseEventHandler;
  onSubmit?: React.FormEventHandler;
}
const Button = (props: Props) => {
  return (
    <div>
      <button onClick={props.onClick} onSubmit={props.onSubmit} className={styles.my_button}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
