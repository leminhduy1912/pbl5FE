import { FaArrowLeft } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const PromotionDetail = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Lấy đối tượng location từ hook useLocation
  const promotionData = location.state.promotionData; // Truy cập dữ liệu từ state
  console.log("Received promotion data:", promotionData);
  return (
    <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          src={"http://localhost:8080/img/" + promotionData.image}
          alt=""
          className="min-w-[400px] h-[400px] aspect-square object-cover rounded-xl"
        />
      </div>
      {/* ABOUT */}
      <div className="flex flex-col gap-4 lg:w-4/4">
        <div
          className="flex flex-row items-center gap-2 "
          onClick={() => {
            navigate("/");
          }}
        >
          {/* <button className="bg-violet-800 text-white font-semibold py-3 px-5 text-xl rounded-3xl h-full">
            Quay lại
          </button> */}
          <FaArrowLeft size={25} /> <span className="text-xl">Quay lại</span>
        </div>
        <div>
          <h1 className="text-3xl font-semibold">{promotionData.title}</h1>
        </div>

        <div>
          <h1 className="text-xl ">{promotionData.description}</h1>
        </div>

        <div>
          <h1 className="text-2xl font-semibold">Điều khoản & điều kiện</h1>
        </div>
        <div>
          <h1 className="text-xl ">{promotionData.clause}</h1>
        </div>
      </div>
    </div>
  );
};

export default PromotionDetail;
