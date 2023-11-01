import React from "react";
import Transaction from "./Transaction";
import Select from "./Select";

const TransactionList = (props) => {
    let componentArray = props.transactions.map(transactionObj) => {
        return <Transaction 
        key={TransactionObj.id}
        transaction={transactionObj}
        deleteTransactionFun={props.deleteTransactionFun}
          />
                
    })}

    
