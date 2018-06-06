import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { toggleShowModal } from '../actions'
import './Modal.css';

function Modal({ isShow = true, children = null, toggleShowModal }) {

  return (
    <div onClick={toggleShowModal} style={{ display: isShow ? 'block' : 'none' }} className='modal-fade'>
      <div className='modal'>
        {children}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isShow: state.modalState.isShow,
  children: state.modalState.children
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleShowModal
}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Modal)