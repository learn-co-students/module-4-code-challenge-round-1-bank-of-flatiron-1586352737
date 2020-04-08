import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {

  // state={
  //   transactions: []

  // }

  // componentDidMount() {
  //   fetch("http://localhost:6001/transactions")
  //     .then(res => res.json())
  //     .then(
  //       (result) => {
  //         this.setState({
  //           transactions: result
  //         })
  //         console.log(result)
  //       })}

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer/>
      </div>
    );
  }
}

export default App;


// http://localhost:6001/transactions