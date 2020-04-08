import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

let originalData = []


class App extends Component {

  state = {
    allTransactions: [],
    searchTerm: ''
  }

  componentDidMount() {
     fetch('http://localhost:6001/transactions')
       .then(response => response.json())
       .then(data => {
             this.setState({ 
              allTransactions: data 
             })
             originalData = data
             console.log(data)
             console.log(originalData)
       })
  }

  sendingArrayDataDown = () => {
      const lCaseSearch = this.state.searchTerm.toLowerCase()
      let filteredArray = this.state.allTransactions.filter((single) =>{
          let lCaseTerm = single.description.toLowerCase()
           return lCaseTerm.includes(lCaseSearch)
     })
     return filteredArray

  }

  handleSearch = (event) => {
      console.log("Searching...")
      console.log(`${event.target.name} -- ${event.target.value}`)
      this.setState({ 
        [event.target.name]: event.target.value 
       })
      console.log(this.state.searchTerm)
  }
 
  handleInputs = (event) => {

  }

  handleSubmit = (event) => {

  }
  
  

  render() {


    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer itemList={this.sendingArrayDataDown()}
                          searchTerm={this.state.searchTerm}
                          handleInputs={this.handleInputs}
                          handleSubmit={this.handleSubmit}
                          handleSearch={this.handleSearch}

                         />
      </div>
    );
  }
}

export default App;
