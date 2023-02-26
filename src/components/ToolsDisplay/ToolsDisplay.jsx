import { React } from "react";
import ArrowRight from "../../Assets/Images/arrow-right.svg";
import FavButton from "../Discovery/FavButton";
import { Link } from "react-router-dom";

function ToolsDisplay({ item }) {
  const showPrice = () => {
    switch (item.priceModel) {
      case "free":
        return "free";
      case "paid":
        return item.price;
      case "trial":
        return "free trial, " + item.price;
      default:
        break;
    }
  };
  return (
    <article className="">
      <div className="tools-card">
        <div className="card-image">
          <Link to={`/tools/${item.id}`} state={{ item: item }}>
            <img
              className="tool-image"
              src={`/Assets/Images/${item.image}`}
              alt={item.name}
            />
          </Link>
          <div className="fav-button">
            <FavButton />
          </div>
        </div>
        <Link to={`/tools/${item.id}`} state={{ item: item }}>
          <div className="tools-title">
            <p>{item.name}</p>
            <img className="arrow-right" src={ArrowRight} alt="" />
          </div>
        </Link>
      </div>
      <div className="tools-description">
        <p>{item.uses}</p>
      </div>
      <p className="tools-price">Price: {showPrice()}</p>
      <p className="tools-author">{item.author}</p>
    </article>
  );
}

export default ToolsDisplay;
