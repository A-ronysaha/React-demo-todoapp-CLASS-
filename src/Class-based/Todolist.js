import React, { Component } from 'react'
import Tododisplay from './Tododisplay'
import Todoform from './Todoform'

class Todolist extends Component {
    constructor(props){
        super(props)
        this.state = {todos: []}
        this.create = this.create.bind(this)
        this.remove = this.remove.bind(this)
        this.update = this.update.bind(this)
    }
    
    create(newTodo)
    {
        this.setState ({
            todos:[...this.state.todos,newTodo]})
    }
    remove(id)
    {
        this.setState({
            todos: this.state.todos.filter(t=> t.id !== id)
        })
    }
    update(id,updateTask)
    {
        let updatedTodos = this.state.todos.map(updt=>{
            if(updt.id ===id){
                return {...updt , task: updateTask}
            }
        
                return updt
        
    })
        this.setState({todos: updatedTodos})
    }
    render(){
        let list = this.state.todos.map(t=>{
           return  <Tododisplay key={t.id} id={t.id} todo ={t.task} removeForm={this.remove} updateForm={this.update}/>
    })
        return(
            <div>
                 <Todoform createForm={this.create} />
                 <div>
                <ul>
                    {list}    
                </ul>
            </div>
            </div>
        )
    }
}

export default Todolist