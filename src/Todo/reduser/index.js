export const ADD_TASK = 'Todo/ADD_TASK'
export const DELETE_TASK = 'Todo/DELETE_TASK'
export const TOGGLE_TASK = 'Todo/TOGGLE_TASK'
export const ON_INPUT_CHANGE = 'Todo/ON_INPUT_CHANGE'

const initState = {
  componentName: 'Todo/',
  inputValue: 'text',
  todoList: [
    {
      id: 4312342,
      text: 'Test task',
      checked: false
    }, {
      id: 431342,
      text: 'Too lost text for task , Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too... Too...',
      checked: false
    }
  ]
}

export default (state = initState, action) => {
  const redusers = {
    [ADD_TASK]: () => {
      if (state.inputValue === '') {
        return state
      }
      const newTodoList = state.todoList
      newTodoList.push({
        id: Date.now(),
        text: state.inputValue,
        checked: false
      })
      return {
        ...state,
        inputValue: '',
        todoList: JSON.parse(JSON.stringify(newTodoList))
      }
    },
    [DELETE_TASK]: () => {
      const newTodoList = state.todoList.filter(task => task.id !== +action.payload)
      return {
        ...state,
        todoList: JSON.parse(JSON.stringify(newTodoList))
      }
    },
    [TOGGLE_TASK]: () => {

      const newTodoList = state.todoList.map(task => task.id === +action.payload ? { ...task, checked: !task.checked } : task)
      console.dir(newTodoList)
      return {
        ...state,
        todoList: JSON.parse(JSON.stringify(newTodoList))
      }
    },
    [ON_INPUT_CHANGE]: () => {
      return {
        ...state,
        inputValue: action.payload
      }
    }
  }
  if (redusers[action.type]) {
    return redusers[action.type](action)
  } else {
    return state
  }
}