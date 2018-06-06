import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Task from '../Task/Task';
import { onInputChange, addTodo } from '../../actions'
import './TodoList.css'



function TodoList({ todoList, componentName, inputValue, onInputChange, addTodo }) {
  const taskHeight = 40
  return (
    <div className='todo'>
      <div key='0'>
        {todoList.map(task => <Task height={taskHeight} key={task.id} id={task.id} checked={task.checked} text={task.text} />)}
      </div>
      <div
        key='1'
        style={{ 'top': (taskHeight * todoList.length) + 'px' }} 
        className='todo__input-wrapper'>
        <input className='todo__input' type='text' onChange={onInputChange} value={inputValue} />
        <div onClick={addTodo} className='todo__add-btn todo__add-btn--stripe'>ADD</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  console.log(state)
  return {
    todoList: state.todoState.todoList,
    inputValue: state.todoState.inputValue
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