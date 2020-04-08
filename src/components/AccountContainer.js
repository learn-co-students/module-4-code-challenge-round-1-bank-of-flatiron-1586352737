import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  render() {
    console.log("testing", this.props)
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.props}/>
      </div>
    );
  }
}

export default AccountContainer;
