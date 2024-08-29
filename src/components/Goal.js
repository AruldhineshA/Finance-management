import React, { useState } from 'react';

function Goal({ setGoal }) {
  const [goal, setGoalAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoal(parseFloat(goal));
    setGoalAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Financial Goal</h2>
      <input
        type="number"
        value={goal}
        onChange={(e) => setGoalAmount(e.target.value)}
        placeholder="Goal Amount"
        required
      />
      <button type="submit">Set Goal</button>
    </form>
  );
}

export default Goal;
