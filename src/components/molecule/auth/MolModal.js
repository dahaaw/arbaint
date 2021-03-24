// import React from 'react';
// // import {Modal} from 'react-bootstrap';
// import {useDispatch} from 'react-redux';
// import {showModal} from '../../../redux/reducer/auth/auth.action'
// import {Modal, Button} from 'antd';

// export default function MolModal({...props}) {
//   const dispatch = useDispatch()

//   // const handleClose = () => {
//   //   dispatch(showModal(props.type,false))
//   // }

//   // return (
//   //   <div>
//   //     <Modal show={props.show} 
//   //     onHide={handleClose} 
//   //     centered>
        
//   //       <Modal.Body>{props.children}</Modal.Body>
//   //     </Modal>
//   //   </div>
//   // );

//   const [visible, setVisible] = React.useState(false);
//   const [confirmLoading, setConfirmLoading] = React.useState(false);
//   const [modalText, setModalText] = React.useState('Content of the modal');

//   const handleOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setVisible(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };

//   const handleCancel = () => {
//     dispatch(showModal(props.type,false))
//     if(props.type === 'REGISTER'){
//       dispatch(showModal('LOGIN',true))
//     }else{
//       dispatch(showModal('REGISTER',true))
//     }
//   };

//   return (
//     <>
//       <Modal
//         title={props.type}
//         centered
//         visible={props.show}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//         footer={[
//           <Button key="back" onClick={handleCancel} className="float-left">
//             Loign
//           </Button>,
//           <Button key="submit" loading={true} type="primary" onClick={handleOk}>
//             Submit
//           </Button>,
//         ]}
//       >
//         {props.children}
//       </Modal>
//     </>
//   );

// }
