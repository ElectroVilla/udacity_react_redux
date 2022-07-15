import API from "goals-todos-api"

export const ADD_TODO = 'ADD_TODO'
export function addTodoAction(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((todo) => {
                dispatch({ type: 'ADD_TODO',  todo })
                cb()
            }).catch((err) => { alert('Error adding todo' + err) })
    }
}
export function handleToggle(id, item, type) {
    return (dispatch) => {
        if(type === 'TOGGLE_TODO') {
            dispatch({ type: 'TOGGLE_TODO', id: id })
            return API.saveTodoToggle(id).catch(() => {
            dispatch({ type: 'TOGGLE_TODO', id: item.id })
            alert('Something went wrong. Try again.')
        })
        } else if(type === 'TOGGLE_GOAL') {
            dispatch({ type: 'TOGGLE_GOAL', id: id })
            return API.saveTodoToggle(id).catch(() => {
            dispatch({ type: 'TOGGLE_GOAL', id: item.id })
            alert('Something went wrong. Try again.')
        })
        }
    }
}
export function handleDeleteTodo(item){
    return (dispatch) => {
        dispatch({ type: 'REMOVE_TODO', id: item.id })
        return API.deleteTodo(item.id).catch(() => {
            dispatch({ type: 'ADD_TODO', todo: item })
            alert('Something went wrong. Try again.')
        })
    }
}

