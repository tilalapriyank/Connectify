import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/register/register";
import Login from "./components/login/login";
import Sidebar from "./components/sidebar/sidebar";
import { useAuth } from "./context/AuthContext";
import { JSX } from "react";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { token } = useAuth();
  return token ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect to Login by default */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/home" element={<Sidebar />} /> */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
