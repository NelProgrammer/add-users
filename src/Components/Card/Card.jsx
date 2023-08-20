import CSS_Card from './Card.module.css';

const Card = (props) => {
  return <div className={CSS_Card.Card}>{props.children}</div>;
};

export default Card;
