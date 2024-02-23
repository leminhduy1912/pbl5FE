import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

import Mai from "../../assets/Mai.jpg";
import Phim_Hay_Thang_1 from "../../assets/phim-hay-thang1.jpg";
import Sieu_Diep_Vien from "../../assets/sieu_diep_vien.png";
import Gia_Dinh_Diep_Vien from "../../assets/gia_dinh_diep_vien.jpg";
import Dau_Truong_Muon_Thu from "../../assets/dau_truong_muon_thu.png";
import Gap_Lai_Chi_Bau from "../../assets/gap-lai-chi-bau11.jpg";
const Promotion = () => {
  const slides = [
    {
      url: Mai,
    },
    {
      url: Sieu_Diep_Vien,
    },
    {
      url: Gap_Lai_Chi_Bau,
    },

    {
      url: Dau_Truong_Muon_Thu,
    },
    {
      url: Phim_Hay_Thang_1,
    },
    {
      url: Gia_Dinh_Diep_Vien,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };
  return (
    <>
      {/* <h3 className="mb-1 mt-7 ml-5 text-3xl font-medium leading-tight text-primary ">
        Promotion
      </h3> */}
      <div
        className="h-[1000px] w-full flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
        }}
      >
        <div className="max-w-[1400px] h-[700px] w-full m-auto py-4 px-4 relative group ">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          {/* <div className="flex top-4 justify-center py-5">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div> */}
        </div>
      </div>
    </>
  );
};

export default Promotion;
