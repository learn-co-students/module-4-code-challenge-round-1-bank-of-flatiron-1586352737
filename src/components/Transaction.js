import React from "react";

const Transaction = (props) => {
  return (
    console.log("hello", props.transaction),
    <tr>
      <td>{props.transaction.date}</td>
      <td>{props.transaction.description}</td>
      <td>{props.transaction.category}</td>
      <td>{props.transaction.amount}</td>
    </tr>
  );
};

export default Transaction;
