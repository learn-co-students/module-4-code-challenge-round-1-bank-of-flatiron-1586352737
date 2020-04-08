import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  state = {
    transactions: [],
    searchTerm: ""

  }

  componentDidMount(){
    fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then((arryOfTransaction) =>{
        // console.log(arryOfTransaction)
        this.setState({
          transactions: arryOfTransaction
        })
      })
    }



   

    changeSearchTerm = (newTerm) => {
      this.setState({
        searchTerm: newTerm
      })
    }

    functionReturnsArray = () => {
      let filterArray = this.state.transactions.filter((transactionPOJO) => {
        return transactionPOJO.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      })

      return filterArray
    }




  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer
          transactions={this.functionReturnsArray()}
          changeSearchTerm={this.changeSearchTerm}
         />
      </div>
    );
  }
}

export default App;
