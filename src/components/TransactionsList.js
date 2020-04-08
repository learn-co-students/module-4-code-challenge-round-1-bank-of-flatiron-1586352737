import React from "react";
import Transaction from "./Transaction";

const TransactionsList = (props) => {
  // console.log(props)
  // console.log(props.transactions)

  let arrayOfComponents = props.transactions.map((singleTransaction) => {
    return <Transaction 
        key={singleTransaction.id}
        transaction={singleTransaction}
    />
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {arrayOfComponents}
      </tbody>
    </table>
  );
};

export default TransactionsList;
