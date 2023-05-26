import React from "react";
interface Props {
    text: string;
   }
const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {props.text}
    </div>
  );
};

export default Alert;
