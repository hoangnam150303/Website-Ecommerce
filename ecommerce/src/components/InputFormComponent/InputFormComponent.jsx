import React, { useState } from "react";
import { Input } from "antd";

const InputFormComponent = () => {
  const [inputValue, setInputValue] = useState(" ");
  return (
    <Input placeholder="Input your phone number" valueInput={inputValue} />
  );
};

export default InputFormComponent;
