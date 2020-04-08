import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {


  render() {
    return (
      <div>
        <Search 
        searchTerm={this.props.searchTerm}
        changeSearchTerm={this.props.changeSearchTerm}
        />
        <AddTransactionForm 
        addOneTransaction={this.props.addOneTransaction}
        />
        <TransactionsList 
        allTransactions={this.props.info}
        />
      </div>
    );
  }
}

export default AccountContainer;
