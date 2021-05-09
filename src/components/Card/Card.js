import { Link } from "react-router-dom";
import { CalendarIcon } from "../../assets/icons/base_Icons";
import classes from "./Card.module.scss"

const Card = ({
    img,
    title,
    url,
    date,
    className,
    text

}) => {
    return (
      <Link
        className={`${classes.NewsCard} ${className}`}
        to={`/feed/${url}`}
      >
        <img className={classes.CardPictureHolder} src={img} alt="" />
        <div className="horizon-left">
          <h3 className={classes.cardTitle}>{title}</h3>
          <p className="extra-card-text">{text}</p>
          <span className={classes.cardInfo}><CalendarIcon/>  {date}</span>
        </div>
      </Link>
    );
}

export default Card
