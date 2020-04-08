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
          <div className="ui buttons">
            <div className="ui animated fade violet button" tabIndex="0" data-action="category" onClick={this.props.handleSort}>
              <div className="visible content">Sort Transactions by Category</div>
              <div className="hidden content">
                <i className="sort icon"></i>Sort Transactions
              </div>
            </div>
            <div className="or"></div>
            <div className="ui animated fade violet button" tabIndex="0" data-action="description" onClick={this.props.handleSort}>
              <div className="visible content">Sort Transactions by Description</div>
              <div className="hidden content">
                <i className="sort icon"></i>Sort Transactions
              </div>
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
