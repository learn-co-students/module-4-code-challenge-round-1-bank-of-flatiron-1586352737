import React from "react";
import { tsPropertySignature } from "@babel/types";

const Transaction = ({transaction}) => {

  const {date, description, category, amount} = transaction
  console.log(transaction)
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
