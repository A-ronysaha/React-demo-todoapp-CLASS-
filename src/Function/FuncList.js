import React, { useState } from "react";
import Funcform from "./Funcform";
import Funcshow from "./Funcshow";

function FuncList() {
  const [todos, setTodos] = useState([]);
  //   let todoList = todos.map((t) => {
  //     console.log(t.task);
  //     return [<Funcshow tasks={t.task} />];
  //   });

  function addTodo(newText) {
    setTodos([{task:newText}]);
  }
  console.log(todos)
  return (
    <div>
      <h1>My To_Dos......</h1>
      <Funcform addTodoText={addTodo} />
      <div>
        {todos.map((t) => {
          console.log(t.task);
          return [<Funcshow tasks={t.task} />]; 
        })}
      </div>
    </div>
  );
}

export default FuncList;
