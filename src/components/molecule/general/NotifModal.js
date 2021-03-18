import React from 'react';
import {Modal} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {addNotif} from '../../../redux/reducer/general/general.action';

export default function NotifModal({...props}) {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(addNotif(false))
  }

  return (
    <div>
      <Modal show={true} 
      onHide={handleClose} 
      >
        
        <Modal.Body className="bg-danger text-center"><p className="m-0">{props.err}</p></Modal.Body>
      </Modal>
    </div>
  );
}
