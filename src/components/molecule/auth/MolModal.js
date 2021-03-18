import React from 'react';
import {Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {showModal} from '../../../redux/reducer/auth/auth.action'

export default function MolModal({...props}) {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(showModal(props.type,false))
  }

  return (
    <div>
      <Modal show={props.show} 
      onHide={handleClose} 
      centered>
        
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
}
