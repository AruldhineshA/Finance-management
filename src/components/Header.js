import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>Personal Finance Management Tool</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/add-income">Add Income</Link>
        <Link to="/add-expense">Add Expense</Link>
        <Link to="/goal">Goal</Link>
        <Link to="/reports">Reports</Link>
      </nav>
    </header>
  );
}

export default Header;
