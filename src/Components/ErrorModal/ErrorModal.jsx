import ReactDOM from 'react-dom';

import CSS_ErrorModal from './ErrorModal.module.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const Backdrop = (props) => {
  return (
    <div className={CSS_ErrorModal['backdrop']} onClick={props.onConfirm}></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <Card>
      <div className={CSS_ErrorModal['ErrorModal']}>
        <div className={CSS_ErrorModal['modal-header']}>{props.errorTitle}</div>
        <div className={CSS_ErrorModal['modal-body']}>
          <h3>{props.errorMsg}</h3>
          <p>You Entered: {props.errorEntry}</p>
        </div>
        <div className={CSS_ErrorModal['modal-footer']}>
          <Button className="close" type="abort" onClick={props.onConfirm}>
            Dismiss
          </Button>
        </div>
      </div>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <>
      {/* <Backdrop onClick={props.onConfirm}></Backdrop>
      <ModalOverlay
        errorTitle={props.errorTitle}
        errorMsg={props.errorMsg}
        errorEntry={props.errorEntry}
        onConfirm={props.onConfirm}
      ></ModalOverlay> */}
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          errorTitle={props.errorTitle}
          errorMsg={props.errorMsg}
          errorEntry={props.errorEntry}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default ErrorModal;
