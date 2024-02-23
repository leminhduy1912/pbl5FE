import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Customer/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<MovieDetailPage />} />
        <Route path="/promotion" element={<PromotionDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
