import React from "react";
import Search from "./Search";
import NewListingForm from "./NewListingForm"

function Header({onSearch, onSort, onAdd}) {

  const [visible, setVisible] = React.useState(false)

  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} onSort={onSort} />
      <select onChange={onSort}>
        <option selected disabled>Sort Location By</option>
        <option value="ascending">A-Z</option>
        <option value="descending">Z-A</option>
      </select>
      <button onClick={()=>setVisible(!visible)}>Add New Listing</button>
      {visible && <NewListingForm onAdd={onAdd} visible={setVisible}/>}
    </header>
  );
}

export default Header;
