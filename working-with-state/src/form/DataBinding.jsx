import React from "react";

export default function DataBinding() {
  return (
    <div>
      <SearchForm />
    </div>
  );
}

function SearchForm() {
  const [searchTerm, setSearchTerm] = React.useState("cats");

  return (
    <>
      <form>
        <label htmlFor="search-input">Search:</label>
        <input
          type="text"
          id="search-input"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <p>Search term: {searchTerm}</p>
    </>
  );
}
