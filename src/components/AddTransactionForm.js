import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      description: "",
      category: "",
      amount: ""
    };
  }

  handleSubmit = (evt) => {
    //Prevent default form submission behavior
    evt.preventDefault();
    fetch('http://localhost:6001/transactions', {
      //POST a request to server eith form data
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        date: this.state.date,
        description: this.state.description,
        category: this.state.category,
        amount: this.state.amount
      })
    })
    .then(r => r.json())
    .then(addTransaction => {
      //call the prop function with the response data
      this.props.addTransactionFun(addTransaction);
      this.setState({
        date: "",
        description: "",
        category: "",
        amount: ""
      });
    });
  }

  handleChange = (evt) => {
    //update state using the input
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input
              type="date"
              name="date"
              value={this.state.date}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              value={this.state.amount}
              onChange={this.handleChange}
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
