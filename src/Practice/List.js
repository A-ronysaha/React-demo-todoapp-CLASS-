 import React, { Component } from 'react'
import Form from './Form'
import Display from './display'

class List extends Component{
    constructor(props){
        super(props)
        this.state = {todo:[]}
        this.showTask = this.showTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.update = this.update.bind(this)
    }

    showTask(t)
    {
        this.setState({
            todo:[...this.state.todo,t]
        })
    }

    removeTask(id)
    {
        this.setState({
           todo: this.state.todo.filter(n=>n.id !== id)
        })
    }

    update(id,updtTask)
    {
        let updateTask = this.state.todo.map(x=>{
            if(x.id === id){
                return {...x,task: updtTask}
            }else{
                return x
            }
        })
        this.setState({todo: updateTask})
    }
    render(){
        let todoss = this.state.todo.map(x=>(
            <Display key={x.id} dltId={x.id} work={x.task} delete={this.removeTask} modify={this.update}/>
        ))
        return(
            <div>
                <Form add={this.showTask}/>
                <h2>My Todo.. are...............</h2>
                <ul>{todoss}</ul>
            </div>
        )
    }
}
export default List