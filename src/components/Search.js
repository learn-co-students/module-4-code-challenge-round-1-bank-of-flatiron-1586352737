import React from "react";

const Search = (props) => {

  const handleType = (e) =>{
    props.changeSearchTerm(e.target.value)
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        value={props.searchTerm}
        onChange={handleType}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;
