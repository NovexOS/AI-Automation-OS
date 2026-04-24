import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Analytics from "./pages/Analytics";

function App() {
  return (
    
      <div className="flex">
        <Sidebar />

        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/analytics" element={<Analytics />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default App;