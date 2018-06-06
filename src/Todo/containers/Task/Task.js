import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, toggleTodo } from '../../actions'
import './Task.css'
function Task(props) {
  return (
    <div className='task' style={{ height: props.height + 'px' }} key={props.id}> 
      <span onClick={props.toggleTodo} data-id={props.id} className='task__toggle-btn'>
        [{props.checked ?'👌':' '}]
      </span>
      {props.text} 
      <span>
        [🔎]
      </span>
      <span onClick={props.deleteTodo} data-id={props.id} className='task__close-btn'>
        [x]
      </span>
    </div>)
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo,
  toggleTodo
}, dispatch)


export default connect(null, mapDispatchToProps)(Task)