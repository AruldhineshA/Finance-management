import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import AddIncome from './components/AddIncome';
import AddExpense from './components/AddExpense';
import Goal from './components/Goal';
import Reports from './components/Reports';
import './styles.css';

function App() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [goal, setGoal] = useState(0);

  const addIncome = (incomeData) => {
    setIncome([...income, incomeData]);
  
  };

  const addExpense = (expenseData) => {
    setExpenses([...expenses, expenseData]);

  };
  

  return (
    <Router>
      <div className="App">
  
        <Header />
        <Routes>
          <Route path="/" element={<Reports income={income} expenses={expenses} />} />
          <Route path="/add-income" element={<AddIncome addIncome={addIncome} />} />
          <Route path="/add-expense" element={<AddExpense addExpense={addExpense} />} />
          <Route path="/goal" element={<Goal setGoal={setGoal} />} />
          <Route path="/reports" element={<Reports income={income} expenses={expenses} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
