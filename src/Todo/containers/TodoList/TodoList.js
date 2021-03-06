import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../Task/Task';
import { onInputChange, addTodo } from '../../actions'
import './TodoList.css'
import cx from 'classnames'


function TodoList({ todoList, componentName, inputValue, onInputChange, addTodo, highlightRequiredField }) {
  const addTodoByEnter = (ev)=> {
    console.log(ev)
    if(ev.key === 'Enter') {
      addTodo()
    }
  }
  const taskHeight = 38
  return (
    <div className='todo'>
      <div key='0'>
        {todoList.map(task => <Task height={taskHeight} key={task.id} id={task.id} checked={task.checked} text={task.text} />)}
      </div>
      <div
        key='1'
        style={{ 'top': (taskHeight * todoList.length) + 'px' }} 
        className='todo__input-wrapper'>
        <input onKeyPress={addTodoByEnter} className={cx('todo__input', { 'todo__input_required': highlightRequiredField})} type='text' onChange={onInputChange} value={inputValue} />
        <div  onClick={addTodo} className='todo__add-btn todo__add-btn--stripe'>ADD</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todoList: state.todoState.todoList,
    inputValue: state.todoState.inputValue,
    highlightRequiredField: state.todoState.highlightRequiredField
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({
  onInputChange,
  addTodo
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)