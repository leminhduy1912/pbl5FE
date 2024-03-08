import { useEffect, useState } from "react";
import "../components/Seat/style.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
const Seat = () => {
  let { showTimeId, theaterId } = useParams();
  showTimeId = showTimeId.replace("showTimeId=", "");
  theaterId = theaterId.replace("theaterId=", "");
  console.log("theaterId", theaterId);
  console.log("showTimeId", showTimeId);
  const navigate = useNavigate();
  const [listSeatOrdered, setListSeatOrdered] = useState([]);
  const [seatSelectedInfor, setSeatSelectedInfo] = useState([]);
  const [listSeatOfTheaterId, setListSeatOfTheaterId] = useState([]);
  const [row, setRow] = useState([]);
  const [seat, setSeat] = useState([]);
  const [price, setPrice] = useState(65);
  const state = useSelector((state) => state);

  const userId = state.authentication.id;
  console.log("id", userId);

  const handleOrderSeat = (item) => {
    console.log("receive", item);

    // // navigate("/receipt");
    // let today = new Date().toLocaleDateString();
    // console.log(today);
    // axios
    //   .post(`${import.meta.env.VITE_API_BE_KEY}/api/v1/booking`, null, {
    //     params: {
    //       showTimeId: showTimeId,
    //       userId: userId,
    //       bookingDate: today,
    //       seatId: item.seatId,
    //       totalAmount: 65000,
    //       status: "Pending",
    //     },
    //   })

    //   .then((response) => {
    //     console.log(response.data.data);
    //     navigate("/receipt");
    //   })
    //   .catch((error) => {
    //     // Xử lý lỗi
    //     console.error("Error:", error);
    //   });
  };

  useEffect(() => {
    getDataInit();
  }, []);

  const getDataInit = async () => {
    try {
      const response2 = await axios.get(
        `${
          import.meta.env.VITE_API_BE_KEY
        }/api/v1/booking?showTimeId=${showTimeId}`
      );
      const ordered = [];
      const updatedList = response2.data.data.result.map((item) =>
        ordered.push(item.seatName)
      );
      setListSeatOrdered(ordered);
    } catch (error) {
      console.error("Error fetching booking data:", error);
      // Xử lý lỗi (hiển thị thông báo, v.v.)
    }

    try {
      const response1 = await axios.get(
        `${import.meta.env.VITE_API_BE_KEY}/api/v1/seat?theaterId=${theaterId}`
      );
      const list1 = response1.data.data.result;
      list1.map((item) => {
        const rowInfo = item.seatNum.substring(0, 1);
        const seatNum = item.seatNum.substring(1);
        console.log("num", seatNum);
        if (!row.includes(rowInfo)) {
          row.push(rowInfo);
        }
        if (!seat.includes(seatNum)) {
          seat.push(seatNum);
        }
      });
      setListSeatOfTheaterId(list1);
    } catch (error) {
      console.error("Error fetching seat data:", error);
    }
  };

  // State để lưu trữ các ghế đã được chọn
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats(selectedSeats.filter((s) => s.seat !== seat));
      setSeatSelectedInfo(seatSelectedInfor.filter((info) => info !== seat)); // Remove from seatSelectedInfo
    } else {
      const seatInfo = listSeatOfTheaterId.find(
        (item) => item.seatNum === seat
      );
      setSelectedSeats([...selectedSeats, { seat: seat, ...seatInfo }]); // Add seat details to selectedSeats
      setSeatSelectedInfo([...seatSelectedInfor, seat]);
    }
  };

  console.log("selected seat", selectedSeats);
  console.log("ordered seat", listSeatOrdered);
  console.log("seat infor", seatSelectedInfor);
  console.log("seat of theater", listSeatOfTheaterId);
  console.log("row", row);
  console.log("seat", seat);
  return (
    <>
      {listSeatOrdered.length > 0 &&
        listSeatOfTheaterId.length > 0 &&
        row.length > 0 && (
          <div className="mt-10 flex flex-col justify-center items-center w-[700px] h-[450px] gap-10">
            <div className="screen">Screen</div>

            <div className="w-full flex flex-col justify-start items-center gap-1">
              {row.includes("A") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">A</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("A"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                ${
                  listSeatOrdered.includes(item.seatNum)
                    ? "bg-white pointer-events-none"
                    : selectedSeats.some((seat) => seat.seat === item.seatNum)
                    ? "bg-green-400 text-white"
                    : "bg-slate-800"
                }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}

              {row.includes("B") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">B</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("B"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                ${
                  listSeatOrdered.includes(item.seatNum)
                    ? "bg-white pointer-events-none"
                    : selectedSeats.some((seat) => seat.seat === item.seatNum)
                    ? "bg-green-400 text-white"
                    : "bg-slate-800"
                }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}

              {row.includes("C") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">C</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("C"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                ${
                  listSeatOrdered.includes(item.seatNum)
                    ? "bg-white pointer-events-none"
                    : selectedSeats.some((seat) => seat.seat === item.seatNum)
                    ? "bg-green-400 text-white"
                    : "bg-slate-800"
                }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}
              {row.includes("D") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">D</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("D"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                          min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                          ${
                            listSeatOrdered.includes(item.seatNum)
                              ? "bg-white pointer-events-none"
                              : selectedSeats.some(
                                  (seat) => seat.seat === item.seatNum
                                )
                              ? "bg-green-400 text-white"
                              : "bg-slate-800"
                          }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}
              {row.includes("E") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">E</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("E"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                ${
                  listSeatOrdered.includes(item.seatNum)
                    ? "bg-white pointer-events-none"
                    : selectedSeats.some((seat) => seat.seat === item.seatNum)
                    ? "bg-green-400 text-white"
                    : "bg-slate-800"
                }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}
              {row.includes("F") && (
                <div className="w-[98%] h-[50px] flex items-center justify-start">
                  <span className="w-40">F</span>
                  <div className="flex justify-around items-center">
                    {listSeatOfTheaterId
                      .filter((item) => item.seatNum.includes("F"))
                      .map((item) => (
                        <div
                          key={item.seatId}
                          className={`
                min-h-[30px] cursor-pointer min-w-[35px] m-[5px] rounded-t-2xl
                ${
                  listSeatOrdered.includes(item.seatNum)
                    ? "bg-white pointer-events-none"
                    : selectedSeats.some((seat) => seat.seat === item.seatNum)
                    ? "bg-green-400 text-white"
                    : "bg-slate-800"
                }`}
                          onClick={() => {
                            if (!listSeatOrdered.includes(item.seatNum)) {
                              toggleSeat(item.seatNum);
                            }
                          }}
                        ></div>
                      ))}
                  </div>
                </div>
              )}
            </div>
            <AnimatePresence>
              {selectedSeats.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-15 flex justify-between items-center w-[90%] bg-slate-300 py-3 px-8 rounded-3xl"
                  onClick={handleOrderSeat}
                >
                  <div className="flex flex-col justify-between items-start max-w-65 gap-5">
                    <span className="text-xl">
                      {selectedSeats.map((item, index) => (
                        <span key={item.seatNum}>
                          {item.seatNum}
                          {index === selectedSeats.length - 1 ? null : " - "}
                        </span>
                      ))}
                    </span>
                    <span className="text-xl">
                      Total Amount: {price * selectedSeats.length}.000 VND
                    </span>
                  </div>

                  <button className="ml-5 min-w-35 bg-blue-500 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-full  ">
                    Đặt vé
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
    </>
  );
};

export default Seat;
