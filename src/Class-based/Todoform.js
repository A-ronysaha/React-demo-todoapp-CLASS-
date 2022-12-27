import React, { Component } from "react";
const {v4: uuidv4} = require('uuid')
class Todoform extends Component {
  constructor(props) {
    super(props);
    this.state = {task:""}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    let newTodo = {...this.state, id:uuidv4()}
   this.props.createForm(newTodo)
   this.setState({task:""})
  }
  render() {
    return (
      <div>
        <h1>Create To-Do F_O_R_M</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="task">Add your Todo.. </label>
            <input
              type="text"
              id="task"
              name="task"  // same as in this.state
              placeholder="To..do"
              value={this.state.task}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button>ADD</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Todoform;
