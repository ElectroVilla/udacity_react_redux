import React from "react"
import {handleToggle} from "../actions/todos"
import {addGoalAction, handleDeleteGoal} from "../actions/goals"
import List from "./List"

class Goals extends React.Component {
    addItem = (e) => {
        e.preventDefault()
        this.props.store.dispatch(addGoalAction(this.input.value, () => this.input.value = ''))
    }
    removeItem = (item) => {
        this.props.store.dispatch(handleDeleteGoal(item))
    }
    toggleItem = (item) => {
        this.props.store.dispatch(handleToggle(item.id, item, 'TOGGLE_GOAL'))
    }
    render() {
        return (
            <div>
                <h1>Goals List</h1>
                <input type="text" placeholder='Add Goal'
                ref={(input ) => this.input = input } />
                <button onClick={this.addItem}>Add Goal</button>

                <List items={this.props.goals} remove={this.removeItem} toggle={this.toggleItem} />
            </div>
        )
    }
}

export default Goals