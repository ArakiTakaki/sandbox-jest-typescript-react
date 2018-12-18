import React from 'react';

// const styles = require('./Form.sass');

interface Props {
  children: any;
  onSubmit: React.FormEventHandler;
}
const Form = (props: Props) => {
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        props.onSubmit(e);
      }}
    >
      {props.children}
    </form>
  );
};

export default Form;
