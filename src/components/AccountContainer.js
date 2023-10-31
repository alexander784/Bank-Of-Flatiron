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


        searchFun = (searchResult) => {
            this.setState({
                search:searchResult
            })
        }

        selectFun = (selectedResult) => {
            this.setState({
                select:selectedResult
            })
        }

        //filter transactions based on search in description
        filterSearchTransactions = () => {
            let {transactions, search, select} = this.state

            let filtersearch = transactions.filter(transaction => {
                return transaction.desrciption.toLowercase().includes(search.toLowecase())
            })
        }

        //Switch statement to filter transaction based on different criteria
        switch(select){
            case "all" :
              return filterSearch
      
            case "descriptionUP" : 
              return filterSearch.sort( (wordA, wordB) => {
                  return wordA.description.localeCompare(wordB.description)
              })
      
            case "descriptionDOWN" : 
            return filterSearch.sort( (wordA, wordB) => {
                return wordB.description.localeCompare(wordA.description)
            })
              
            case "categoryUP" : 
            return filterSearch.sort( (wordA, wordB) => {
                return wordA.category.localeCompare(wordB.category)
            })
      
            case "categoryDOWN" : 
            return filterSearch.sort( (wordA, wordB) => {
                return wordB.category.localeCompare(wordA.category)
            })
      
            case "amountUP" : 
            return filterSearch.sort( (numA, numB) => {
                return numA.amount - numB.amount
            })
      
            case "amountDOWN" : 
            return filterSearch.sort( (numA, numB) => {
                return numB.amount - numA.amount
            })
      
            case "dateUP" : 
            return filterSearch.sort( (numA, numB) => {
                return new Date(numA.date) - new Date(numB.date)
            })
      
            case "dateDOWN" : 
            return filterSearch.sort( (numA, numB) => {
                return new Date(numB.date) - new Date(numA.date)
            })
      
            default:
          }
        }
      




    

    

    

    export default AccountContainer;

