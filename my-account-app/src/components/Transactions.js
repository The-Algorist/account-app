import React, { useState, useEffect } from 'react';
import './Transactions.css';
import Transaction from './Transaction';


function Transactions() {
  const [amount, setAmount] = useState(0);
  const [balance, setBalance] = useState(2500);
  const [transactions, setTransactions] = useState([]);
  const [errorMessage, setErrorMessage] = useState(''); // New state variable for error message

  // Load transactions from local storage on component mount
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  // Save transactions to local storage whenever transactions state changes
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleCredit = () => {
    // Validate positive amount
    if (amount <= 0) {
      setErrorMessage('Invalid credit amount'); // Set error message if invalid amount
      return;
    }

    // Update balance and save transaction
    const creditAmount = Number(amount);
    setBalance((prevBalance) => prevBalance + creditAmount);
    const newTransaction = { type: 'credit', amount: creditAmount, date: new Date().toISOString() };
    setTransactions([...transactions, newTransaction]);
    setErrorMessage(''); // Clear error message on successful credit
  };

  const handleDebit = () => {
    // Validate positive amount and sufficient balance
    if (amount <= 0 || amount > balance) {
      setErrorMessage('Invalid debit amount or insufficient balance'); // Set error message if invalid amount or insufficient balance
      return;
    }

    // Update balance and save transaction
    const debitAmount = Number(amount);
    setBalance((prevBalance) => prevBalance - debitAmount);
    const newTransaction = { type: 'debit', amount: debitAmount, date: new Date().toISOString() };
    setTransactions([...transactions, newTransaction]);
    setErrorMessage(''); // Clear error message on successful debit
  };

  return (
    <div className='flex justify-center items-center flex-col mt-20'>
      <h2>Transactions</h2>
      <p>Balance: ${balance}</p>
      <form className='mr-20 w-50 '>
        <label>Amount:</label>
        <div className='w-40'>
        <input classname="rounded-full" type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className='w-full mb-5'>
        <button className='p-4 rounded-full w-40 h-12 bg-green-500' onClick={handleCredit}>
          Credit
        </button>
        </div>
        <div className='mb-5'>
        <button className='p-4 rounded-full w-40 h-12 bg-green-500 mr-5' onClick={handleDebit}>
          Debit
        </button>
        </div>
      </form>

      <h3>Transaction History</h3>
      
        
          {transactions.map((transaction, index) => (
              <Transaction key={index} transaction={transaction} />
          ))}
      
      

      {/* Conditionally render error message if it exists */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Transactions;
