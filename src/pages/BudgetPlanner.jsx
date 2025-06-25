import { useState } from 'react';

function BudgetPlanner() {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState({
    rent: '',
    food: '',
    transport: '',
    others: '',
  });

  const totalExpenses = Object.values(expenses).reduce(
    (acc, val) => acc + (parseFloat(val) || 0),
    0
  );
  const savings = (parseFloat(income) || 0) - totalExpenses;

  return (
    <div className="max-w-xl mx-auto mt-10 p-4 bg-white rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">📊 Budget Planner</h2>

      <div className="mb-4">
        <label className="block font-semibold">Monthly Income (₹)</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
          className="w-full border p-2 rounded mt-1"
        />
      </div>

      {['rent', 'food', 'transport', 'others'].map((key) => (
        <div className="mb-4" key={key}>
          <label className="block font-semibold capitalize">{key} (₹)</label>
          <input
            type="number"
            value={expenses[key]}
            onChange={(e) =>
              setExpenses({ ...expenses, [key]: e.target.value })
            }
            className="w-full border p-2 rounded mt-1"
          />
        </div>
      ))}

      <div className="mt-6 p-4 bg-gray-100 rounded">
        <p><strong>Total Expenses:</strong> ₹{totalExpenses.toFixed(2)}</p>
        <p><strong>Savings:</strong> ₹{savings.toFixed(2)}</p>

        {savings < 0 ? (
          <p className="text-red-600 mt-2">⚠️ You are overspending! Try to reduce expenses.</p>
        ) : (
          <p className="text-green-600 mt-2">🎉 You're saving money! Keep it up.</p>
        )}
      </div>
    </div>
  );
}

export default BudgetPlanner;
