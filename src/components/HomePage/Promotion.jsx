// <div
//   classNameName="container  bg-gray-50 flex items-center justify-center "

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
// >

const Promotion = () => {
  const [listImagePromotion, setListImagePromotion] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    axios
      .get(`${import.meta.env.VITE_API_BE_KEY}/api/v1/promotion/image`)
      .then((response) => {
        // Xử lý dữ liệu phản hồi
        setListImagePromotion(response.data.data.result);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error("Error:", error);
      });
  }, []);
  const handleGetDetailPromotion = (promotionId) => {
    console.log(promotionId);
    axios
      .get(
        `${import.meta.env.VITE_API_BE_KEY}/api/v1/promotion?id=${promotionId}`
      )
      .then((response) => {
        console.log("data promotion receive", response.data.data);
        navigate("/promotion", {
          state: { promotionData: response.data.data.result },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <div
        className="h-[1050px] w-full  flex flex-col justify-items-center items-center"
        style={{
          backgroundImage: "linear-gradient(to top, #09203f 0%, #537895 100%)",
        }}
      >
        <h3 className="mb-4 mt-4 text-4xl font-semibold text-white rounded-3xl  border-solid border-stone-50 p-5 border-2 w-[100]">
          Khuyến mãi & Ưu đãi
        </h3>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
          {listImagePromotion.length > 0 &&
            listImagePromotion.map((item, index) => {
              return (
                <div
                  className="flex px-3 py-3"
                  key={index}
                  onClick={() => handleGetDetailPromotion(item.id)}
                  data-aos="fade-out"
                >
                  <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg">
                    <img
                      className="w-full"
                      src={`http://localhost:8080/img/${item.path}`}
                      alt="Sunset in the mountains"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Promotion;
