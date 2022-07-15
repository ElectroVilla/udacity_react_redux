import API from "goals-todos-api"

export const RECEIVE_DATA = 'RECEIVE_DATA'
export function generateId() {
    return Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
}

export function receiveDataAction(todos, goals) {
    return {
        type: RECEIVE_DATA,
        todos,
        goals
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return Promise.all([
            API.fetchTodos(), 
            API.fetchGoals()
        ]).then(([todos, goals]) => {
            console.log('todos', todos)
            console.log('goals', goals)
            dispatch(receiveDataAction(todos, goals))
        })
    }
}
