import React, { useState } from 'react';

function AddIncome({ addIncome }) {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addIncome({ amount: parseFloat(amount), source, date });
    setAmount('');
    setSource('');
    setDate('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Income</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Income Amount"
        required
      />
      <input
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        placeholder="Source"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Income</button>
    </form>
  );
}

export default AddIncome;
