import { useState } from 'react';
import CSS_ErrorModal from './ErrorModal.module.css';

import Button from '../Button/Button';

const ErrorModal = (props) => {
  // const [modalStatus,setModalStatus] = useState(()=>(props.displayModal==true?'block':'none'));
  const handleModalClose = (event) => {
    // When the user clicks on <span> (x), close the modal
    let currentT = event.target.parentNode.parentNode.parentNode;
    currentT.style.display = 'none';
    currentT.style.zIndex = 0;
    props.setInputError(null);
  };

  const handleModalOpen = (event) => {
    // When the user clicks on <span> (x), close the modal
    event.target.props.parent.props.style.display = 'block';
    event.target.props.parent.props.style.zindex = 100;
  };

  return (
    <>
      <div
        className={CSS_ErrorModal['backdrop']}
        onClick={props.onConfirm}
      ></div>
      <div className={CSS_ErrorModal.ErrorModal}>
        <div className={CSS_ErrorModal['modal-content']}>
          <div className={CSS_ErrorModal['modal-header']}>
            {props.errorTitle}
          </div>
          <div className={CSS_ErrorModal['modal-body']}>
            <div>{props.errorMsg}</div>
            <div>You Entered: {props.errorEntry}</div>
          </div>
          <div className={CSS_ErrorModal['modal-footer']}>
            <Button className="close" type="abort" onClick={props.onConfirm}>
              Dismiss
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
