import React, { useState } from "react";
import { WrapperInputStyle } from "./style";

const InputFormComponent = (props) => {
  const { placeHolder, ...rests } = props;
  const [inputValue] = useState("");
  return (
    <WrapperInputStyle
      placeholder={placeHolder}
      valueInput={inputValue}
      {...rests}
    />
  );
};

export default InputFormComponent;
