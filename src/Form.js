  
import React, { useState } from "react";

const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    onChange: e => setValue(e.target.value),
    resetValue: () => setValue("")
  };
};

export default ({ onSubmit }) => {
  const { resetValue, ...text } = useInputValue("");

  return (
    <form className="todo-form"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetValue();
      }}
    >
      <input className="todo-input" {...text} />
    </form>
  );
};