import React, { useState } from "react";

const SearchForm = (props) => {
  const [search, setSearch] = useState("");

  const updateSearch = e => {
    let searchText = e.target.value;
    setSearch(searchText);
  }

  const getSearch = e => {
    e.preventDefault();
    props.updateQuery(search);
    setSearch("");
  }

  return (
    <form className="search-form" onSubmit={getSearch}>
      <input
        className="search-bar"
        type="text"
        value={search}
        onChange={updateSearch}
      />
      <button className="search-button" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
