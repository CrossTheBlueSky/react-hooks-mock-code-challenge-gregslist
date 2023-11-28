import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, onDelete}) {

  const allListings = listings.map((ele)=>{
    return (
      <ListingCard key={ele.id} id={ele.id} description={ele.description} 
      image={ele.image} location={ele.location} onDelete={onDelete}/>
    )
  })

  return (
    <main>
      <ul className="cards">
        {allListings}
      </ul>
    </main>
  );
}

export default ListingsContainer;
