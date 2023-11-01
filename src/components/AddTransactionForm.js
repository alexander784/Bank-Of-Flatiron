import React, {Component} from "react";

//class function
state = { date:"", description:"", category:"",amount:""}

handleSubmit = (evt) => {
    evt.preventDefault()
    fetch('http://localhost:6001/transactions', {
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
      this.props.addTransactionFun(addTransaction)
      this.setState({
        date: "",
        description: "",
        category: "",
        amount: ""
      })
    })

}

handleChange = (evt) => {
    this.setState({
        [evt.target.name] : evt.target.value
    })
}





      