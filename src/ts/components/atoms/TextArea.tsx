import React, { ChangeEventHandler } from 'react';

interface Props {
  value: string;
  eventChange?: ChangeEventHandler;
  children?: string;
}
const TextArea = (props: Props) => {
  const { value, eventChange, children } = props;
  return (
    <div>
      InputType:{children}
      <input type='text' value={value} onChange={eventChange} />
    </div>
  );
};

export default TextArea;
