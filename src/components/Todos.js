import React from "react"
// import { connect } from "react-redux"
import {handleDeleteTodo, addTodoAction, handleToggle} from "../actions/todos"
import List from "./List"

class Todos extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.store.dispatch(addTodoAction(this.input.value, () => this.input.value = ''))
    }
    removeItem = (item) => {
        this.props.store.dispatch(handleDeleteTodo(item))
    }
    toggleItem = (item) => {
        this.props.store.dispatch(handleToggle(item.id, item, 'TOGGLE_TODO'))
    }
    render() {
        return (
            <div>
                <h1>Todos List</h1>
                <input type="text" placeholder='Add Todo'
                ref={(input ) => this.input = input } />
                <button onClick={this.addItem}>Add Todo</button>
                <List items={this.props.todos} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

export default Todos