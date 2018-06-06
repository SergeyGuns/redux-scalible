import { TOGGLE_SHOW_MODAL } from '../reduser'

export const toggleShowModal = text => {
  if(typeof text === 'string' ){
    return dispatch => {
      dispatch({
        type: TOGGLE_SHOW_MODAL,
        payload : text
      })
    }
  } else {
      return dispatch => {
        dispatch({
          type: TOGGLE_SHOW_MODAL,
          payload: ''
        })
      }
  }
}
