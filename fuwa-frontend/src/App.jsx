import { Routes, Route } from "react-router-dom";
import Login from "./components/auth/Login/Login";
import Register from "./components/auth/Register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import AlertNotification from "./components/shared/components/AlertNotification";

function App() {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
      </Routes>
      <AlertNotification />
    </>
  );
}

export default App;
