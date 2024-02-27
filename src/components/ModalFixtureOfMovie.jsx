import axios from "axios";
import { useEffect, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { motion, AnimatePresence } from "framer-motion";
const ModalFixtureOfMovie = (props) => {
  const { image, movieId, onClose, isOpen } = props;

  console.log("movieId", movieId);

  const [listTime, setListTime] = useState([]);
  useEffect(() => {
    let formdata = new FormData();
    formdata.append("movieId", movieId);
    formdata.append("dateShow", "26-2-2024");
    axios
      .get(
        `${import.meta.env.VITE_API_BE_KEY}/api/v1/showtime?movieId=` +
          movieId +
          `&dateShow=26-2-2024`
      )
      .then((response) => {
        // Xử lý dữ liệu phản hồi
        setListTime(response.data.data.result);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error("Error:", error);
      });
  }, []);
  const [selectedDay, setSelectedDay] = useState(0);
  const daysOfWeek = [
    { name: "Sun", number: 11 },
    { name: "Mon", number: 12 },
    { name: "Tue", number: 13 },
    { name: "Wed", number: 14 },
    { name: "Thu", number: 15 },
    { name: "Fri", number: 16 },
    { name: "Sat", number: 17 },
  ];
  const handleDayClick = (index, day) => {
    console.log("day", day);
    setSelectedDay(index); // Đặt ngày được chọn
  };
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10"
        >
          <div className="max-h-full w-full max-w-5xl overflow-y-auto sm:rounded-2xl bg-white">
            <div className="w-full">
              <div
                className="cursor-pointer flex justify-end items-center"
                onClick={onClose}
              >
                <CiCircleRemove
                  className="mr-5 mt-5"
                  size={50}
                  color="rgb(83, 120, 149)"
                />
              </div>

              <div className="m-8 my-20 mx-auto p-10">
                <div className="mb-8">
                  <h1 className="mb-4 text-3xl font-semibold">
                    Lịch chiếu phim
                  </h1>
                  <span className="flex items-center">
                    <span className="h-px flex-1 bg-black"></span>
                  </span>
                </div>

                <div className="h-[200px] bg-white p-6">
                  <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2 md:mx-12">
                    {daysOfWeek.map((day, index) => (
                      <div
                        key={index}
                        onClick={() => handleDayClick(index, day)}
                        className={`flex group rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center w-16 ${
                          selectedDay === index ? "bg-regal-blue" : ""
                        } ${
                          selectedDay !== index
                            ? "hover:shadow-regal-blue  hover:shadow-lg hover-light-shadow "
                            : ""
                        }`}
                      >
                        <div className="flex items-center px-4 py-4">
                          <div className="text-center">
                            <p className="text-gray-900 group-hover:text-black text-sm transition-all duration-300">
                              {day.name}
                            </p>
                            <p className="text-gray-900 group-hover:text-black mt-3 group-hover:font-bold transition-all duration-300">
                              {day.number}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-20 w-[100vw]">
                  <div className="w-[200px] h-[200px]">
                    <img
                      className=""
                      src={"http://localhost:8080/img/" + image}
                      alt=""
                    />
                  </div>

                  <div className=" min-w-[400px] h-full grid grid-cols-3  gap-3  ">
                    {listTime.length > 0 ? (
                      listTime.map((item, index) => (
                        <div
                          className="w-[140px] h-[80px] bg-white shadow-xl border-2 border-regal-blue rounded-2xl flex flex-col justify-center items-center gap-2 hover:shadow-regal-blue cursor-pointer pb-4"
                          key={index}
                        >
                          <div className="flex flex-row items-center justify-center gap-2">
                            <div className="flex flex-row items-center justify-center">
                              <span>{item.timeStart}</span>
                            </div>
                            <span>-</span>
                            <div className="flex items-center justify-center">
                              <span>{item.timeEnd}</span>
                            </div>
                          </div>
                          <span className="flex items-center">
                            <span className="h-px flex-1 bg-black">
                              ROOM {item.theaterName}
                            </span>
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-xl">
                        Không có lịch chiếu trong khoảng thời gian này
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalFixtureOfMovie;
