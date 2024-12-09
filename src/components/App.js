import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

let originalData = []
let sortOnOff = false

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

  handleDelete = (itemId) => {
    fetch(`http://localhost:6001/transactions/${itemId}`, {
           method: 'DELETE'
          })
      .then(response => response.json())
            console.log(originalData)
            originalData.splice(itemId - 1, 1)
            console.log(originalData)
            this.setState({ 
                 allTransactions: originalData
            })
  } 

  sendingArrayDataDown = () => {
      const lowerCaseSearch = this.state.searchTerm.toLowerCase()
      let filteredArray = this.state.allTransactions.filter((single) =>{
          let lowerCaseDescr = single.description.toLowerCase()
          let lowerCaseCatry = single.category.toLowerCase()
              return lowerCaseDescr.includes(lowerCaseSearch)
              ||
              lowerCaseCatry.includes(lowerCaseSearch)
     })
     return filteredArray
  }

  handleSearch = (event) => {
      console.log("Searching...")
      this.setState({ 
        [event.target.name]: event.target.value 
       })
  }

  handleSubmit = (newTransaction) => {
        fetch('http://localhost:6001/transactions', {
              method: 'POST',
              headers: {
                      'Content-Type': 'application/json'
              },
              body: JSON.stringify(newTransaction)
            })
          .then(response => response.json())
          .then(addedData => {
                console.log(addedData)
                originalData.push(addedData)
                console.log(originalData)
                this.setState({ 
                     allTransactions: originalData 
                })
        })
  }
  
  handleSort = (action) => {
           sortOnOff = !sortOnOff
           function compareCategory(a, b) {
                    const categoryA = a.category
                    const categoryB = b.category
                    let comparison = 0
                    if (categoryA > categoryB) {
                        comparison = 1
                    } else if (categoryA < categoryB) {
                    comparison = -1
                    }
                    return comparison
            }
            function compareDescription(a, b) {
              const descriptionA = a.description
              const descriptionB = b.description
              let comparison = 0
              if (descriptionA > descriptionB) {
                  comparison = 1
              } else if (descriptionA < descriptionB) {
              comparison = -1
              }
              return comparison
            }
            if (sortOnOff) {
                let sortedArray = [...this.state.allTransactions]
                if (action === 'category') {
                    sortedArray.sort(compareCategory)
                    this.setState({
                         allTransactions: sortedArray
                    })
                } else {
                    sortedArray.sort(compareDescription)
                    this.setState({
                         allTransactions: sortedArray
                    })
                }
            } else {
                this.setState({
                     allTransactions: originalData
                })
            }
  }
  
  render() {

    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer itemList={this.sendingArrayDataDown()}
                          searchTerm={this.state.searchTerm}
                          handleSubmit={this.handleSubmit}
                          handleSearch={this.handleSearch}
                          handleSort={this.handleSort}
                          handleDelete={this.handleDelete}
                         />
      </div>
    );
  }
}

export default App;
