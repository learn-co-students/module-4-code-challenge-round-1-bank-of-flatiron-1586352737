import React, { Component } from "react";

class AddTransactionForm extends Component {

    state = {
      date: "date",
      description: "description",
      category: "category",
      amount: "amount"
    }

    handleChangeAllInputs = (evt) => {
      this.setState({
        [evt.tager.name] : evt.target.value
      })
    }


  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input 
            type="date" 
            name="date"
            value={this.state.date}
            />
            <input 
            type="text" 
            name="description" 
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleChangeAllInputs}
            />

            <input 
            type="text" 
            name="category" 
            placeholder="Category" 
            value={this.state.category}

            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}

            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
