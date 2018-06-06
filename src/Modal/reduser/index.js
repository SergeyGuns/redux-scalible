export const TOGGLE_SHOW_MODAL = 'Modal/TOGGLE_SHOW_MODAL'
export const SET_MODAL_CHILDREN = 'Modal/SET_MODAL_CHILDREN'

const initState = {
  isShow:true,
  children: null
}

export default (state = initState, action) => {
  const redusers = {
    [TOGGLE_SHOW_MODAL]: ()=>({
      ...state,
      isShow: !state.isShow,
      children: action.payload
    }),
    [SET_MODAL_CHILDREN]: ()=>({
      ...state,
      children: action.payload
    })
  }
  if (redusers[action.type]) {
    return redusers[action.type](action)
  } else {
    return state
  }
}