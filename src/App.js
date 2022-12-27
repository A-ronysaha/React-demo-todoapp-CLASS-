import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import Todolist from './Todolist'
import Form from "./Form";
import List from "./List";
import FuncList from "./FuncList";

class App extends Component {
  render() {
    return(
       <div>
        <FuncList/>
       </div>
    )
  }
}

export default App;
