// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Header from "./Header";
import Slider from "./Slider/Slider";
import Footer from "./Footer";
import Promotion from "./Promotion";
import Tetisinomial from "./Tetisinomial";
const HomePage = () => {
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
