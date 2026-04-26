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
    <Routes>

      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route
        path="/dashboard"
        element={
          <div className="flex">
            <Sidebar />
            <Dashboard />
          </div>
        }
      />

      <Route
        path="/leads"
        element={
          <div className="flex">
            <Sidebar />
            <Leads />
          </div>
        }
      />

      <Route
        path="/analytics"
        element={
          <div className="flex">
            <Sidebar />
            <Analytics />
          </div>
        }
      />

    </Routes>
  );
}

export default App;