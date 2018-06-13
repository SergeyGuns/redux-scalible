import { ADD_TASK, DELETE_TASK, TOGGLE_TASK, ON_INPUT_CHANGE } from '../reduser'

export const addTodo = () => {
  return dispatch => {
    dispatch({
      type: ADD_TASK
    })
  }
}

export const deleteTodo = ev => {
  return dispatch => {
    dispatch({
      type: DELETE_TASK,
      payload: ev.target.dataset.id
    })
  }
}

export const toggleTodo = ev => {
  return dispatch => {
    dispatch({
      type: TOGGLE_TASK,
      payload: ev.target.dataset.id
    })
  }
}

export const onInputChange = ev => {
  return dispatch => {
    dispatch({
      type: ON_INPUT_CHANGE,
      payload: ev.target.value
    })
  }
}