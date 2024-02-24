// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Header from "../../components/HomePage/Header";

import Slider from "../../components/HomePage/Slider/Slider";
import Footer from "../../components/HomePage/Footer";
import { useSelector } from "react-redux";
import Feed from "../../components/HomePage/Feed";
import Promotion from "../../components/HomePage/Promotion";
const HomePage = () => {
  const token = useSelector((state) => state.authentication.token);
  console.log(token);
  return (
    <>
      <Header />
      <Feed />
      <Slider />
      <Promotion />
      <Footer />
    </>
  );
};

export default HomePage;
