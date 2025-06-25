import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Learn from './pages/Learn';
import Tools from './pages/Tools';
import Chat from './pages/Chat'; // ✅ Import Chat component
import SavingsCalculator from './pages/SavingsCalculator';
import FinanceChatbot from './pages/FinanceChatbot';
import BudgetPlanner from './pages/BudgetPlanner';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/chat" element={<Chat />} /> {/* ✅ Add Chat route */}
        <Route path="/tools/savings" element={<SavingsCalculator />} /> {/* ✅ Add this */}
        <Route path="/tools/chatbot" element={<FinanceChatbot />} />
        <Route path="/tools/budget" element={<BudgetPlanner />} />
        

      </Routes>
    </Router>
  );
}

export default App;
