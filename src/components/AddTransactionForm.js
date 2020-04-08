import React, { Component } from "react";




class AddTransactionForm extends Component {




  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.props.handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" 
                               value={this.props.date}
                               onChange={this.props.handleInputs}
            
            />
            <input type="text" name="description" placeholder="Description" 
                               value={this.props.description}
                               onChange={this.props.handleInputs}
            
            />
            <input type="text" name="category" placeholder="Category" 
                               value={this.props.category}
                               onChange={this.props.handleInputs}
            
            />
            <input
              type="number"
              placeholder="Amount"
              step="0.01"
              name="amount"
              value={this.props.amount}
              onChange={this.props.handleInputs}
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
