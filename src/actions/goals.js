import API from "goals-todos-api"

export const ADD_GOAL = 'ADD_GOAL'
export function addGoalAction(name, cb){
    return (dispatch) => {
        return API.saveGoal(name)
            .then((goal) => {
                dispatch({ type: 'ADD_GOAL', goals: goal })
                cb()
            }).catch((err) => { alert('Error adding goal') })
    }
}
export function handleDeleteGoal(item){
    return (dispatch) =>{
        dispatch({ type: 'REMOVE_GOAL', id: item.id })
        return API.deleteGoal(item.id).catch(() => {
            dispatch({ type: 'ADD_GOAL', goals: item })
            alert('Something went wrong. Try again.')
        })
    }
}

