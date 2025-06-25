import { useState } from 'react';

function SavingsCalculator() {
  const [goal, setGoal] = useState('');
  const [current, setCurrent] = useState('');
  const [months, setMonths] = useState('');
  const [monthly, setMonthly] = useState(null);
  const [tip, setTip] = useState('');

  const calculate = () => {
    const g = parseFloat(goal);
    const c = parseFloat(current);
    const m = parseInt(months);

    if (isNaN(g) || isNaN(c) || isNaN(m) || g <= c || m <= 0) {
      setMonthly(null);
      setTip("Please enter valid values. Goal must be greater than current savings, and months must be positive.");
      return;
    }

    const saving = ((g - c) / m).toFixed(2);
    setMonthly(saving);

    // Add a tip based on how hard it is
    if (saving > 10000) {
      setTip("⚠️ That's a steep goal! Consider extending your timeline or reducing expenses.");
    } else if (saving > 5000) {
      setTip("✅ A challenging but doable goal. Track spending carefully.");
    } else {
      setTip("🎉 You're in great shape! Just stay consistent.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
      <h2 className="text-2xl font-bold mb-4 text-center">💰 Savings Goal Calculator</h2>

      <input
        type="number"
        placeholder="Goal Amount (₹)"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="number"
        placeholder="Current Savings (₹)"
        value={current}
        onChange={(e) => setCurrent(e.target.value)}
        className="w-full p-2 mb-3 border rounded"
      />
      <input
        type="number"
        placeholder="Months to Save"
        value={months}
        onChange={(e) => setMonths(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        onClick={calculate}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
      >
        Calculate
      </button>

      {monthly && (
        <div className="mt-5 bg-green-100 text-green-800 p-3 rounded">
          📈 You need to save <strong>₹{monthly}</strong> per month to reach your goal.
        </div>
      )}
      {tip && <p className="mt-3 text-sm text-gray-700 italic">{tip}</p>}
    </div>
  );
}

export default SavingsCalculator;
