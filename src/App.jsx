import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Customer/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SeatOrderPage from "./pages/SeatOrderPage";

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
        <Route path="/seat" element={<SeatOrderPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
