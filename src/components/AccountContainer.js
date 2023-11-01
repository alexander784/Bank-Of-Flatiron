import React, { Component, useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("all");

  useEffect(() => {
    fetch('http://localhost:6001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
      });
  }, []);

  const addTransactionFun = (addTransaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, addTransaction]);
  };

  const deleteTransactionFun = (deletedTransaction) => {
    const newTransArr = transactions.filter((transaction) => transaction.id !== deletedTransaction.id);
    setTransactions(newTransArr);
  };

  const searchFun = (searchResult) => {
    setSearch(searchResult);
  };

  const selectFun = (selectedResult) => {
    setSelect(selectedResult);
  };

  const filterSearchTransactions = () => {
    let filterSearch = transactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(search.toLowerCase());
    });

    switch (select) {
      // Rest of your switch cases
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
  };

  return (
    <div>
      <Search searchValue={search} searchFun={searchFun} />
      <AddTransactionForm addTransactionFun={addTransactionFun} />
      <TransactionsList
        transactions={filterSearchTransactions()}
        select={select}
        selectFun={selectFun}
        deleteTransactionFun={deleteTransactionFun}
      />
    </div>
  );
}

export default AccountContainer;
