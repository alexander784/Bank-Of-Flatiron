import React from "react";

const Transaction = (props) => {
    //initialize the props destructuring
    let(date, description, category, amount) = props.transaction
//function handle delete 
let handledelete = (evt) => {
    fetch(`http://localhost:6001/transactions/${props.transaction.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(deletedTransaction => {
      props.deleteTransactionFun(props.transaction)
    })
  }

}
