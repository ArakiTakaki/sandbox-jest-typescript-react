import React from 'react';

const styles = require('./CrossButton.sass');

interface Props {
  onClick?: React.MouseEventHandler;
  value?: any;
}
const CrossButton = (props: Props) => {
  return (
    <div>
      <label>
        <input value={props.value} type='button' className={styles.cross} onClick={props.onClick} />
        <div className={styles.icon} />
      </label>
    </div>
  );
};

export default CrossButton;
