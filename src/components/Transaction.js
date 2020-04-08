import React from "react";

const Transaction = (props) => {

  let {date,description,category,amount} = props.info

  function removeTrans() {
    props.deleteTransaction(props.info)
  }

  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td onClick={removeTrans}>X</td>
    </tr>
  );
};

export default Transaction;
