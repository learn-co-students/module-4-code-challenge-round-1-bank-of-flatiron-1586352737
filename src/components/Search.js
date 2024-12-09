import React from "react";



const Search = (props) => {


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        name="searchTerm"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
        onChange={props.handleSearch}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
