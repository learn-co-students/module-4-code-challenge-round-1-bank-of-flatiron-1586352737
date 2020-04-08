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
        <br/>
        <div className="ui animated fade violet button" tabIndex="0" onClick={this.props.handleSort}>
          <div className="visible content">Sort Transactions by Category or Description</div>
          <div className="hidden content">
            <i className="sort icon"></i>Sort Transactions
          </div>
        </div>
        <AddTransactionForm handleInputs={this.props.handleInputs}
                            handleSubmit={this.props.handleSubmit}
                            date={this.props.date}
                            category={this.props.category}
                            description={this.props.description}
                            amount={this.props.amount}
                            />
        <TransactionsList itemList={this.props.itemList}
                          handleDelete={this.props.handleDelete}
        />
      </div>
    );
  }
}

export default AccountContainer;
