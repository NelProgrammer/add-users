import { useState } from 'react';
import CSS_ErrorModal from './ErrorModal.module.css';

const ErrorModal = (props) => {
  // const [modalStatus,setModalStatus] = useState(()=>(props.displayModal==true?'block':'none'));
  const handleModalClose = (event) => {
    // When the user clicks on <span> (x), close the modal
    event.target.style.display = 'none';
  };

  const handleModalOpen = (event) => {
    // When the user clicks on <span> (x), close the modal
    event.target.style.display = 'block';
  };

  return (
    <div className={CSS_ErrorModal.ErrorModal}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2>Modal Header:Error</h2>
          </div>
          <div className="modal-body">
            <p>Input Error...</p>
            <span className="close" onClick={handleModalClose}>
              &Okay;
            </span>
          </div>

          <div className="modal-footer">
            <h5>Modal Footer</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
