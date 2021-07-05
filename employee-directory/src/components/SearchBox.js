import React from "react";

function SearchBox({ handleSearchChange }) {
  return (
    <div >
      <form>
        <input type="search" placeholder="Search" aria-label="Search" onChange={e => handleSearchChange(e)} />
      </form>
    </div>
  );
}
export default SearchBox;
