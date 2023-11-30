import React, { useState, useEffect } from 'react';
import './Transactions.css';

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
    <div>
      <h2>Transactions</h2>
      <p>Balance: ${balance}</p>
      <form>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <button type="button" onClick={handleCredit}>
          Credit
        </button>

        <button type="button" onClick={handleDebit}>
          Debit
        </button>
      </form>

      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td>${transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Conditionally render error message if it exists */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default Transactions;
