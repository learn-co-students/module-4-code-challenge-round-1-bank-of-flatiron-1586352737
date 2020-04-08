import React, { Component } from "react";

class AddTransactionForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = { 
  //   date: "2020-04-8",
  //   description: 'description',
  //   category: 'category',
  //   amount: 0
  // };

  //   this.handleDateChange = this.handleDateChange.bind(this);
  //   this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  //   this.handleCategoryChange = this.handleCategoryChange.bind(this);
  //   this.handleAmountChange = this.handleAmountChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  
  handleDateChange(event) {
    this.props.onDateChange(event.target.value);
  }
  handleDescriptionChange(event) {
    this.props.onDescriptionChange(event.target.value);
  }
  handleCategoryChange(event) {
    this.props.onCategoryChange(event.target.value);
  }
  handleAmountChange(event) {
    this.props.onAmountChange(event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    ////////////////////////////
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="inline fields">
            <input type="date" name="date" value={this.props.date} onChange={this.handleDateChange}/>
            <input type="text" name="description" value={this.props.description} onChange={this.handleDescriptionChange}/>
            <input type="text" name="category" value={this.props.category} onChange={this.handleCategoryChange}/>
            <input
              type="number"
              name="amount"
              value={this.props.amount}
              step="0.01"
              onChange={this.handleAmountChange}
            />
          </div>
          <button className="ui button" type="submit" onClick={this.handleSubmit}>
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
