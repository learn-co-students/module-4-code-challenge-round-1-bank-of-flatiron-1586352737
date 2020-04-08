import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";




class AccountContainer extends Component {




  render() {


    
    return (
      <div>
        <Search searchTerm={this.props.searchTerm}
                handleSearch={this.props.handleSearch}
                           />
        <AddTransactionForm handleInputs={this.props.handleInputs}
                            handleSubmit={this.props.handleSubmit}
                            date={this.props.date}
                            category={this.props.category}
                            description={this.props.description}
                            amount={this.props.amount}
                            />
        <TransactionsList itemList={this.props.itemList}/>
      </div>
    );
  }
}

export default AccountContainer;
