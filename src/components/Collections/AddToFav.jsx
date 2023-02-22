import { useState } from "react";
import FavBtn from "../../Assets/Images/Favorite.svg";

function AddToFav() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <section className="btn-fav" onClick={handleClick}>
      <img src={FavBtn} alt="" />
      <p>{active ? "In favourites":"Add to favourite"}</p>
    </section>
  );
}

export default AddToFav;
