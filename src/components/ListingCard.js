import React from "react";

function ListingCard({description, location, image, id, onDelete}) {

  const [isFavorite, setIsFavorite] = React.useState(false)


  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={()=>setIsFavorite(false)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={()=>setIsFavorite(true)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={()=>onDelete(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
