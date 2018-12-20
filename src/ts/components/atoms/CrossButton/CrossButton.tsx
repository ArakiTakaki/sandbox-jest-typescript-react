import React from 'react';
import styles from './styles';

interface Props {
  onClick?: React.MouseEventHandler;
  value?: any;
}
const CrossButton = (props: Props) => {
  return (
    <div>
      <label>
        <input type={'button'} value={props.value} className={styles.cross} onClick={props.onClick} />
        <div className={styles.icon} />
      </label>
    </div>
  );
};

export default CrossButton;
