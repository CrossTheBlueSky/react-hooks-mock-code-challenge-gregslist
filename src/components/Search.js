import React from "react";

function Search({onSearch}) {



  function handleSubmit(e) {
    e.preventDefault();
    console.log(e)
    onSearch(e.target["search"].value)

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="why doesn't the deliverable ask for a live search?"
        //onChange={(e) => console.log(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
