import { ADD_GOAL } from "../actions/goals"

export default function goals(state = [], action) {
    switch (action.type) {
        case 'ADD_GOAL':
            return state.concat([action.goals])
        case 'REMOVE_GOAL':
            return state.filter((goal) => goal.id !== action.id)
        case 'TOGGLE_GOAL':
            return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, { complete: !todo.complete }))
        case 'RECEIVE_DATA':
            return action.goals
        default:
            return state
    }
}