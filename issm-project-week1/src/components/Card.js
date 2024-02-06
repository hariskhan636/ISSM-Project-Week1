import star from "../images/star.png";
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="person1" className="card--image" />
      <div className="card--stats">
        <img src={star} alt="star" className="card--star" />
        <span>{props.rating}</span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p className="card--price">
        <span className="bold">From {props.price}</span> / person
      </p>
    </div>
  );
};

export default Card;
