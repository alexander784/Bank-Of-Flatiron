import React, { useEffect } from "react";
import SearchBar from "SearchBar";

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

        addTransactionFun = (addTransaction) => {
            this.setstate(prevState => {
                return {
                    transactions: [...prevState.transactions, addTransaction]
                }
            })
        }


    

    

    }

