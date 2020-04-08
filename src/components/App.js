import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state={
    info:[],
    searchTerm:""
  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(r => r.json())
      .then((arrayofTransactions) =>{
          this.setState({
            info: arrayofTransactions
          })
      })
  }

  addOneTransaction = (newTransaction) =>{
    let newnum =  parseFloat(newTransaction.amount,10)
    newTransaction.amount = newnum
    fetch(("http://localhost:6001/transactions"),{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTransaction)
    })
      .then(r => r.json())
      .then((newCreated) => {
        let newCopy = [...this.state.info,newCreated]
            this.setState({
              info: newCopy
           })
      })
  }

  changeSearchTerm = (newSearch) => {
    this.setState({
      searchTerm:newSearch
    })
  }

  filterinfo = () => {
    let filteredArray = this.state.info.filter((singleTrans)=>{
      return singleTrans.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return filteredArray
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer 
        info={this.filterinfo()} 
        addOneTransaction={this.addOneTransaction}
        searchTerm={this.state.searchTerm}
        changeSearchTerm={this.changeSearchTerm}
        />
      </div>
    );
  }
}

export default App;
