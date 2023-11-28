import React, { useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = React.useState([])
  const [renderedListings, setRenderedListings] = React.useState([])

  useEffect(() => getListings(), [])

  function getListings() {

    fetch("http://localhost:6001/listings")
      .then(r => r.json())
      .then(data => {
        setListings(data)
        setRenderedListings(data)
      })
  }

  function deleteHandler(id) {

    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    }).then(getListings)
    
  }

  function searchHandler(query){

    const newArr = listings.filter((ele)=>{
      return ele.description.includes(query)
    })  
    setRenderedListings(newArr)
  }

  function sortHandler(query){

    if(query.target.value === "ascending"){
    const newArr = renderedListings.sort((a, b)=>{
      const x= (a.location).toLowerCase()
      const y= (b.location).toLowerCase()
      return ((x < y) ? -1 : ((x>y ? 1 : 0)))

    })
      setRenderedListings([...newArr])  
    }
    if(query.target.value === "descending"){
      const newArr = renderedListings.sort((a, b)=>{
        const x= (a.location).toLowerCase()
        const y= (b.location).toLowerCase()
        return ((x > y) ? -1 : ((x<y ? 1 : 0)))
  
      })
        setRenderedListings([...newArr])  
      }
  }

  function addHandler(item){
    fetch("http://localhost:6001/listings",{
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(item)
    }).then(getListings)

  }

  return (
    <div className="app">
      <Header onAdd={addHandler} listings={listings} onSearch={searchHandler} onSort={sortHandler}/>
      <ListingsContainer listings={renderedListings} onDelete={deleteHandler}/>
    </div>
  );
}

export default App;
