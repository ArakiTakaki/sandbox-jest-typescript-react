import React, { ChangeEventHandler } from "react";
import "./sass/TextArea";

interface Props {
  value: string;
  eventChange: ChangeEventHandler;
}
const TextArea = (props: Props) => {
  const { value, eventChange } = props;
  return <input type="text" value={value} onChange={eventChange} />;
};

export default TextArea;
