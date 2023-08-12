import { useState } from 'react';
import CSS_ErrorModal from './ErrorModal.module.css';

import Button from '../Button/Button';

const ErrorModal = (props) => {
  // const [modalStatus,setModalStatus] = useState(()=>(props.displayModal==true?'block':'none'));
  const handleModalClose = (event) => {
    // When the user clicks on <span> (x), close the modal
    event.target.parent.style.display = 'none';
    event.target.parent.style.zindex = 0;
  };

  const handleModalOpen = (event) => {
    // When the user clicks on <span> (x), close the modal
    event.target.props.parent.props.style.display = 'block';
    event.target.props.parent.props.style.zindex = 100;
  };

  return (
    <div className={CSS_ErrorModal.ErrorModal}>
      <div id="myModal" className={CSS_ErrorModal['modal']}>
        <div className={CSS_ErrorModal['modal-content']}>
          <div className={CSS_ErrorModal['modal-header']}>
            Modal Header: Error ...
          </div>
          <div className="modal-body">
            <p>Input Error...!</p>
            <Button className="close" type="abort" onClick={handleModalClose}>
              Okay
            </Button>
            {/* <span className="close" onClick={handleModalClose}>
              Okay;
            </span> */}
          </div>

          <div className={CSS_ErrorModal['modal-footer']}>Modal Footer</div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
