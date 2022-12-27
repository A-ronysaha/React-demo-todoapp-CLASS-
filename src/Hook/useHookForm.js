import { useState } from "react";

function useInput(initialVal = "") {
  const [value, setvalue] = useState(initialVal);
  function updateInput(e) {
    console.log(e.target.value)
    setvalue(e.target.value);
  }
  const resetInput = () => {
    setvalue("");
  };
  return [value , updateInput , resetInput ];
}

export default useInput;
