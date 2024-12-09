import React, { Component } from "react";




class AddTransactionForm extends Component {

  state = {
       date: '',
       description: '',
       category: '',
       amount: ''
  }

  handleInputs = (event) => {
        this.setState({ 
             [event.target.name]: event.target.value
        })
  }

  arrangeDataSubmit = (event) => {
        this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.arrangeDataSubmit}>
          <div className="inline fields">
            <input type="date" name="date" 
                               value={this.state.date}
                               onChange={this.handleInputs}
            />
            <input type="text" name="description" placeholder="Description" 
                               value={this.state.description}
                               onChange={this.handleInputs}
            />
            <input type="text" name="category" placeholder="Category" 
                               value={this.state.category}
                               onChange={this.handleInputs}
            />
            <input
              type="number"
              placeholder="Amount"
              step="0.01"
              name="amount"
              value={this.state.amount}
              onChange={this.handleInputs}
            />
          </div>
          <button className="ui violet button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
