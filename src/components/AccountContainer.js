import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
    .then(res => res.json())
    .then(data => this.setState({transactions: data}))
  
  }

  handleSearchChange = e => {
    this.setState({searchTerm: e.target.value})
  }

  addTransaction = transaction => {
    this.setState({ transactions: [...this.state.transactions, transaction]})
  }
  render() {
    let lowerCaseDescription = this.state.searchTerm.toLowerCase()
    let filteredTransaction = this.state.transactions.filter(t => t.description.toLowerCase().includes(lowerCaseDescription))
    // console.log(this.state.transactions)
    return (
      <div>
        <Search onChange={this.handleSearchChange} />
        <AddTransactionForm  addTransaction={this.addTransaction}/>
        <TransactionsList transaction={filteredTransaction} />
      </div>
    );
  }
}

export default AccountContainer;
