import React from "react";

const Transaction = (props) => {

  const date = props.transaction.date
  const description = props.transaction.description
  const category = props.transaction.category
  const amount = props.transaction.amount
  const Id = props.transaction.id

  const arrangeDataDelete = (event) => {
        props.handleDelete(Id)
  }


  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
      <td>
        <div className="ui animated fade violet button" tabIndex="0" 
                           onClick={arrangeDataDelete}>
          <div className="visible content">Action</div>
          <div className="hidden content">
               Delete This
          </div>
        </div>
      </td>
    </tr>
  );
};

export default Transaction;
