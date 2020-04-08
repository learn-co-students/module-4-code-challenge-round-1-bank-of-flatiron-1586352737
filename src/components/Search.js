import React from "react";

const Search = (props) => {

  const sendsearchup = (e) => {
    props.changeSearchTerm(e.target.value)

  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder={"Search your Recent Transactions"}
        onChange={() => {
          console.log("Searching...");
          sendsearchup()
        }}
      />
      <i className="circular search link icon"></i>
    </div>
  );
};

export default Search;

// send search up