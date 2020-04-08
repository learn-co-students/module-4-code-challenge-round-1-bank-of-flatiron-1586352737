import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {

  let getEach = props.transactions.map(transaction => (
    <Transaction key={transaction.id} info={transaction} deleteTransaction={props.deleteTransaction}/>
  ))

  function sortBy(e) {
    let str = e.target.innerText
    let attribute = str.toLowerCase()
    props.sortTransactions(attribute)
    str.includes('▼') ? e.target.innerText = str.slice(1) : e.target.innerText = `▼${str}`
  }

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header" onClick={sortBy}>Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={sortBy}>Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={sortBy}>Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header" onClick={sortBy}>Amount</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Remove</h3>
          </th>
        </tr>
        {getEach}
      </tbody>
    </table>
  );
};

export default TransactionsList;
