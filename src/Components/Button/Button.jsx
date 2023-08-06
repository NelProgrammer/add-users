import CSS_Button from './Button.module.css';

const Button = (props) => {
  return (
    <button
      className={CSS_Button.InputButton}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
