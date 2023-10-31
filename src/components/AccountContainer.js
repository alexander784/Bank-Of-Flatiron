import React, { useEffect } from "react";
import SearchBar from "./SearchBar";

function AccountContainer() {
        state = {Transactions : [], SearchBar: "", select: "all"}

        useEffect(() => {
            fetch('http://localhost:6001/transactions')
            .then(r => r.json())
            .then(resp => {
                this.setstate({
                    transactions:resp
                })
            })
        })

        //add new list of transaction

        addTransactionFun = (addTransaction) => {
            this.setstate(prevState => {
                return {
                    transactions: [...prevState.transactions, addTransaction]
                }
            })
        }

        //function to delete transactions

        deleteTransactionFun = (deletedTransaction) => {
            let newTransArr = this.state.trasactions.filter(transaction => {
                return transaction.id !== deletedTransaction.id

            })
            this.setState({
                transactions: newTransArr
            })
        }




    

    

    }

    export default AccountContainer;
