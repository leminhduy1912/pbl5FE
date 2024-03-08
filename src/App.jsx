import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Customer/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import SeatOrderPage from "./pages/SeatOrderPage";
import Receipt from "./components/Receipt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/movie-detail/:movieId" element={<MovieDetailPage />} />
        <Route
          path="/promotion/:promotionId"
          element={<PromotionDetailPage />}
        />
        <Route
          path="/seat/:showTimeId/:theaterId"
          element={<SeatOrderPage />}
        />

        <Route path="/receipt" element={<Receipt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
