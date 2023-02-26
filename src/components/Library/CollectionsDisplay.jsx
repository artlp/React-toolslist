import { React } from "react";
import ArrowRight from "../../Assets/Images/arrow-right.svg";
import FavButton from "../Discovery/FavButton";
import { Link } from "react-router-dom";

function CollectionsDisplay({ item }) {

  return (
    <article className="">
      <div className="tools-card">
        <div className="card-image">
          <Link to={`/collections/${item.id}`} state={{ item: item }}>
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
        <Link to={`/collections/${item.id}`} state={{ item: item }}>
          <div className="tools-title">
            <p>{item.name}</p>
            <img className="arrow-right" src={ArrowRight} alt="" />
          </div>
        </Link>
      </div>
      <p className="tools-author">{item.user}</p>
    </article>
  );
}

export default CollectionsDisplay;
