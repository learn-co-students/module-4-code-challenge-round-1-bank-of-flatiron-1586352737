import React from "react";

const Transaction = (props) => {

  const date = props.transaction.date
  const description = props.transaction.description
  const category = props.transaction.category
  const amount = props.transaction.amount

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  );
};

export default Transaction;
