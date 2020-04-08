import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

    state = {
      seartTerm: "www"
    }

    changeSearchTerm = (newTerm) => {
      this.setState({
        searchTerm: newTerm
      })
    }

    functionReturnsArray = () => {
      let filterArray = this.state.transactions.filter((transactionPOJO) => {
        return transactionPOJO.description.includes(this.state.seartTerm)
      })

      return filterArray
    }


  render() {
    return (
      
      <div>
        <Search 
        searchTerm={this.state.seartTerm}
        changeSearchTerm={this.changeSearchTerm}
        />
        <AddTransactionForm />
        <TransactionsList
          transactions={this.props.transactions}
          // transactions={this.functionReturnsArray()}
       />
      </div>
    );
  }
}

export default AccountContainer;
