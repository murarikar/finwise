import { Link } from 'react-router-dom';

function Tools() {
  const tools = [
    {
      title: "💰 Savings Goal Calculator",
      description: "Calculate how much you need to save each month.",
      link: "/tools/savings",
      color: "bg-blue-100 hover:bg-blue-200",
    },
    {
      title: "💬 Financial Literacy Chatbot",
      description: "Ask financial questions and get simple answers.",
      link: "/tools/chatbot",
      color: "bg-yellow-100 hover:bg-yellow-200",
    },
    {
      title: "📊 Budget Planner",
      description: "Track income, expenses, and plan monthly savings.",
      link: "/tools/budget",
      color: "bg-green-100 hover:bg-green-200",
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">🧰 FinWise Tools</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.title}
            to={tool.link}
            className={`block p-6 rounded-xl shadow-md transition-all duration-300 ${tool.color}`}
          >
            <h2 className="text-xl font-semibold mb-2">{tool.title}</h2>
            <p className="text-gray-700">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Tools;
