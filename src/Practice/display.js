import React, { Component } from "react";
class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      task: this.props.work,
      isEdit: false };
    this.handleRemove = this.handleRemove.bind(this);
    this.handleChange = this.handleChange.bind(this);
   this.handleUpdate = this.handleUpdate.bind(this);
   this.toggleForm = this.toggleForm.bind(this)
  }
  handleChange(e) {
    this.setState({ [e.target.name ]: e.target.value });
  }

  handleUpdate(e)
  {
    e.preventDefault()
    this.props.modify(this.props.id,this.state.task)
    this.setState({isEdit: false})
  }
  handleRemove() {
    this.props.delete(this.props.dltId);
  }
  toggleForm(){
    this.setState({isEdit: !this.state.isEdit})
  }


  render() {
    let result;
    if (this.state.isEdit) {
      result = (
        <div>
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              name='task'
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div>
          <li>{this.props.work}</li>
          <button onClick={this.handleRemove}>XX</button>
          <button onClick={this.toggleForm}>Edit</button>
        </div>
      );
    }
    return result;
  }
}
export default Display;
