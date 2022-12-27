import React, { Component } from "react";
const {v4: uuidv4} = require('uuid')
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { task: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newTodo = {...this.state, id:uuidv4()}
    this.props.add(newTodo)
    this.setState({ task: "" })
  }
  render() {
    return (
      <div>
        <h1>To..Do... Form</h1>
        <section>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              id="task"
              name="task" // same as in this.state
              placeholder="To..do"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </form>
        </section>
      </div>
    );
  }
}

export default Form
