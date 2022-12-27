import React, { Component } from "react";
class Tododisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      task: this.props.todo
    };
    this.handleRemove = this.handleRemove.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleRemove() {
    this.props.removeForm(this.props.id);
  }

  toggleForm() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  handleUpdate(e) {
    e.preventDefault();
    this.props.updateForm(this.props.id,this.state.task)
    //this.setState({isEditing:false})
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    let result;
    if (this.state.isEditing) {
      result = (
        <div>
          <form onSubmit={this.handlUpdate}>
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
        </div>
      );
    } else {
      result = (
        <div>
          <button onClick={this.toggleForm}>Edit</button>
          <button onClick={this.handleRemove}>X</button>
          <li>{this.props.todo}</li>
        </div>
      );
    }
    return result;
  }
}

export default Tododisplay;
