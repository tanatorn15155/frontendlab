// FinancialManagement.js
import React, { useState } from 'react';

function FinancialManagement() {
  const [income, setIncome] = useState('');
  const [expense, setExpense] = useState('');
  const [transactions, setTransactions] = useState([]);
  
  const handleAddTransaction = () => {
    const transaction = {
      income: parseFloat(income),
      expense: parseFloat(expense),
      net: parseFloat(income) - parseFloat(expense),
      date: new Date().toLocaleString(),
    };

    setTransactions([...transactions, transaction]);

    // Clear the input fields after adding the transaction
    setIncome('');
    setExpense('');
  };

  // ฟังก์ชันคำนวณรายรับทั้งหมด, รายจ่ายทั้งหมด, และกำไร/ขาดทุน
  const calculateTotal = (type) => {
    return transactions.reduce((total, transaction) => total + transaction[type], 0);
  };

  return (
    <div>
      <h2>Financial Management</h2>
      <div>
        <input
          type="number"
          placeholder="Income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          type="number"
          placeholder="Expense"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <button onClick={handleAddTransaction}>Add Transaction</button>
      </div>

      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            Date: {transaction.date} - Income: {transaction.income} - Expense: {transaction.expense} - Net: {transaction.net}
          </li>
        ))}
      </ul>

      <h3>Summary</h3>
      <p>Total Income: {calculateTotal('income')}</p>
      <p>Total Expense: {calculateTotal('expense')}</p>
      <p>Net: {calculateTotal('income') - calculateTotal('expense')}</p>
    </div>
  );
}

export default FinancialManagement;
