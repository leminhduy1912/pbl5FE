import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

const PromotionDetail = () => {
  const navigate = useNavigate();
  let { promotionId } = useParams();
  promotionId = promotionId.replace("promotionId=", "");

  // Do whatever you want with the movieId
  console.log("promotion ID:", promotionId);
  const [dataPromotion, setDataPromotion] = useState();
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_BE_KEY}/api/v1/promotion?id=${promotionId}`
      )
      .then((response) => {
        console.log("data promotion ", response.data.data);
        setDataPromotion(response.data.data.result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  console.log("data", dataPromotion);
  return (
    <>
      {dataPromotion !== undefined && (
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={"http://localhost:8080/img/" + dataPromotion.image}
              alt=""
              className="min-w-[400px] h-[400px] aspect-square object-cover rounded-xl"
            />
          </div>

          <div className="flex flex-col gap-4 lg:w-4/4">
            <div
              className="flex flex-row items-center gap-2 "
              onClick={() => {
                navigate("/");
              }}
            >
              <FaArrowLeft size={25} />{" "}
              <span className="text-xl">Quay lại</span>
            </div>
            <div>
              <h1 className="text-3xl font-semibold">{dataPromotion.title}</h1>
            </div>

            <div>
              <h1 className="text-xl ">{dataPromotion.description}</h1>
            </div>

            <div>
              <h1 className="text-2xl font-semibold">Điều khoản & điều kiện</h1>
            </div>
            <div>
              <h1 className="text-xl ">{dataPromotion.clause}</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PromotionDetail;
