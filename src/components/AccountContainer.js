import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {

  state={
    transactions: [],
    date: "2020-04-8",
    description: 'description',
    category: 'category',
    amount: 0,
    searchterm: ``
  }

  searchedTransactions = () => {
    console.log("in search", this.state.transactions)
    let searchedArray = this.state.transactions.filter((transaction) => {
      console.log("in filter", transaction.description)
      transaction.description.includes(this.state.searchterm)

    })
    console.log(searchedArray)
    return searchedArray

  }

  componentDidMount() {
    fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            transactions: result
          })
          console.log(result)
        })}
  
  onDateChange = (newDate) => {
    this.setState({date: newDate})
  }
  onDescriptionChange = (newDescription) => {
    this.setState({description: newDescription})
  }
  onCategoryChange = (newCategory) => {
    this.setState({category: newCategory})
  }
  onAmountChange = (newAmount) => {
    this.setState({amount: newAmount})
  }

  onSubmit = () => {
    const data = JSON.stringify(this.state)
    fetch("http://localhost:6001/transactions", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: data
    })
      .then(res => res.json())
      .then(
        (result) => {
          const newstate = this.state.transactions.slice()
          newstate.push(result)
          this.state.transactions.push(result)
          this.setState({
            transactions: newstate
          })
        })
      
      }

  changeSearchTerm = (newvalue) => {
    this.setState({
      searchterm: newvalue
    })

  }


  render() {
    // console.log("testing", this.props)
    this.searchedTransactions()
    return (
      <div>
        <Search 
          searchterm = {this.searchterm}
          changeSearchTerm = {this.changeSearchTerm}
        />
        <AddTransactionForm 
          values={this.state}
          onDateChange={this.onDateChange}
          onDescriptionChange={this.onDescriptionChange}
          onCategoryChange={this.onCategoryChange}
          onAmountChange={this.onAmountChange}
          onSubmit={this.onSubmit}
          />
        <TransactionsList transactions={this.searchedTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
