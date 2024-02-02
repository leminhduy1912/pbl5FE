import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Auth/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Dashboard from "./pages/Admin/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Loading />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
