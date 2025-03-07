import "../ItemCard/ItemCard.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";
import { useContext } from "react";
function ItemCard({ item, onCardClick, onCardLike }) {
  const handleCardClick = () => {
    onCardClick(item);
  };

  const currentUser = useContext(CurrentUserContext);
  // const isLiked = currentUser
  //   ? item.likes.some((id) => id === currentUser._id)
  //   : false;

  const isLiked = item.likes.length > 0;

  const handleLike = () => {
    console.log("Check item", item);
    console.log("Check if is liked", isLiked);
    console.log("Check id", item._id);
    onCardLike({ id: item._id, isLiked: isLiked });
  };

  return (
    <li className="card">
      <div className="item__header">
        <h2 className="card__name">{item.name}</h2>
        <button onClick={handleLike} className="like__btn"></button>
      </div>
      <img
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
        onClick={handleCardClick}
      />
    </li>
  );
}

export default ItemCard;
