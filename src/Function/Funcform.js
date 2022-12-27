import React from "react";
import useInput from "../Hook/useHookForm";

function Funcform(props) {
  const [valueTask, handleChange, reset] = useInput("");
  return (
    <div>
      <div>
        <h1>The To_Do Form ...</h1>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.addTodoText(valueTask)
            reset()
            }}>
          <input type="text" value={valueTask} onChange={handleChange} />
          <button>Submit</button> 
        </form>
      </div>
    </div>
  );
}

export default Funcform;
