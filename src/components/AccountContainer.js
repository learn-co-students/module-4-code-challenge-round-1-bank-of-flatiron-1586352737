import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchInput: ''
  }

  componentDidMount() {
    fetch(`http://localhost:6001/transactions`)
    .then(res => res.json())
    .then(data => this.setState({
      transactions: data
    }))
  }

  addTransaction = (t) => {
    fetch(`http://localhost:6001/transactions`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(t)
    })
    .then(res => res.json())
    .then(newTrans => this.setState({
      transactions: [...this.state.transactions, newTrans]
    }))
  }

  handleSearch = (e) => {
    this.setState({
      searchInput: e.target.value
    })
  }

  filterArray = () => {
    let newArray = this.state.transactions.filter(t => {
      return t.description.toLowerCase().includes(this.state.searchInput)
    })
    return newArray
  }

  render() {
    return (
      <div>
        <Search searchInput={this.state.searchInput} handleSearch={this.handleSearch}/>
        <AddTransactionForm addTransaction={this.addTransaction}/>
        <TransactionsList transactions={this.filterArray()}/>
      </div>
    );
  }
}

export default AccountContainer;
