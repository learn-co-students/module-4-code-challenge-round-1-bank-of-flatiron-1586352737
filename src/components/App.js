import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

let originalData = []
let sortOnOff = false

class App extends Component {

  state = {
    allTransactions: [],
    searchTerm: '',
    date: '',
    description: '',
    category: '',
    amount: ''

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

  handleDelete = (event) => {
    const itemId = event.target.parentElement.dataset.id
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
           return lowerCaseDescr.includes(lowerCaseSearch)
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
        console.log(`${event.target.name} -- ${event.target.value}`)
        this.setState({ 
          [event.target.name]: event.target.value
         })
        console.log(`${this.state.date} -- ${this.state.description} -- ${this.state.category} -- ${this.state.amount}`)
  }

  handleSubmit = (event) => {
        const newTransaction = {
              date: this.state.date,
              description: this.state.description,
              category: this.state.category,
              amount: this.state.amount
        }
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
  
  

  handleSort = (event) => {
           sortOnOff = !sortOnOff
           const actionToSortWith = event.target.parentElement.dataset.action
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
                if (actionToSortWith === 'category') {
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
                          handleInputs={this.handleInputs}
                          handleSubmit={this.handleSubmit}
                          handleSearch={this.handleSearch}
                          date={this.state.date}
                          description={this.state.description} 
                          category={this.state.category}
                          amount={this.state.amount}
                          handleSort={this.handleSort}
                          handleDelete={this.handleDelete}
                         />
      </div>
    );
  }
}

export default App;
