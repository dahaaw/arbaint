import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {addNotif} from '../../../redux/reducer/general/general.action';
import { notification } from 'antd';

export default function NotifModal() {
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(addNotif(false,false))
  }
  const {notif} = useSelector(state => state.general)
  return (
    <div style={{zIndex:3}}>
      {notification[notif.type]({
        message: notif.text,
        // description: notif.text,
        // onClick: handleClose,
        // onClose: handleClose
      })}
    {setTimeout(() => {
      handleClose()
    }, 10)}
    </div>
  );
}



