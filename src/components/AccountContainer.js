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
