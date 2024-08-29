import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Reports({ income, expenses }) {
  const totalIncome = income.reduce((acc, item) => acc + item.amount, 0);
  const totalExpenses = expenses.reduce((acc, item) => acc + item.amount, 0);
  const savings = totalIncome - totalExpenses;

  const data = {
    labels: ['Income', 'Expenses', 'Savings'],
    datasets: [
      {
        label: 'Financial Overview',
        data: [totalIncome, totalExpenses, savings],
        backgroundColor: ['#4caf50', '#f44336', '#2196f3'],
      },
    ],
  };

  return (
    <div>
      <h2>Financial Reports</h2>
      <Bar data={data} />
    </div>
  );
}

export default Reports;
