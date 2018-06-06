import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteTodo, toggleTodo } from '../../actions'
import { toggleShowModal } from '../../../Modal/actions'
import './Task.css'

function Task(props) {
  const addPayloadForModal = (ev) => {
    console.log(ev)
    props.toggleShowModal(props.text)
  }
  return (
    <div style={{ opacity: props.checked?.5:1}} className='task' style={{ height: props.height + 'px' }} key={props.id}> 
      <span onClick={props.toggleTodo} data-id={props.id} className='task__toggle-btn'>
        [{props.checked ? '✔️' :'✖️'}]
      </span>
      {props.text} 
      <span className='task__show-modal-btn' onClick={addPayloadForModal}>
        [🔎]
      </span>
      <span onClick={props.deleteTodo} data-id={props.id} className='task__close-btn'>
        [x]
      </span>
    </div>)
}

const mapDispatchToProps = dispatch => bindActionCreators({
  deleteTodo,
  toggleTodo,
  toggleShowModal
}, dispatch)


export default connect(null, mapDispatchToProps)(Task)