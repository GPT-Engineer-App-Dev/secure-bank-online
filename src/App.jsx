import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import TransactionHistory from "./pages/TransactionHistory.jsx";
import FundTransfer from "./pages/FundTransfer.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/transaction-history" element={<TransactionHistory />} />
      <Route path="/fund-transfer" element={<FundTransfer />} />
      </Routes>
    </Router>
  );
}

export default App;
