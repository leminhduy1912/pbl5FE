// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Header from "../../components/HomePage/Header";
import Promotion from "../../components/HomePage/Promotion";
import Slider from "../../components/HomePage/Slider/Slider";
import Tetisinomial from "./Tetisinomial";
import Footer from "../../components/HomePage/Footer";
import { useSelector } from "react-redux";
const HomePage = () => {
  const token = useSelector((state) => state.authentication.token);
  console.log(token);
  return (
    <>
      <Header />
      <Promotion />
      <Slider />
      <Tetisinomial />
      <Footer />
    </>
  );
};

export default HomePage;
