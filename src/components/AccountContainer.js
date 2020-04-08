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
        <AddTransactionForm onChange={this.props.onChange}
                            
                            
        
                            />
        <TransactionsList itemList={this.props.itemList}/>
      </div>
    );
  }
}

export default AccountContainer;
