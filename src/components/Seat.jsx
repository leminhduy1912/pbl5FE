import { useState } from "react";
import "../components/Seat/style.css";

const Seat = () => {
  const rows = ["A", "B", "C", "D", "E", "F"];
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8"];

  const seats = Array.from({ length: 8 }, (_, index) => index + 1);

  // State để lưu trữ các ghế đã được chọn
  const [selectedSeats, setSelectedSeats] = useState([]);

  // Hàm xử lý sự kiện khi chọn ghế
  const toggleSeat = (row, seat) => {
    console.log(selectedSeats);
    console.log("row", row);
    console.log("seat", seat);
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );
    console.log("is selected ?", isSelected);
    console.log(selectedSeats);

    if (isSelected) {
      // Nếu ghế đã được chọn thì loại bỏ khỏi danh sách các ghế đã chọn
      setSelectedSeats(
        selectedSeats.filter((s) => !(s.row === row && s.seat === seat))
      );
    } else {
      console.log("chua duoc chon");
      // Nếu ghế chưa được chọn thì thêm vào danh sách các ghế đã chọn
      setSelectedSeats([...selectedSeats, { row, seat }]);
    }
  };
  console.log("ssssssssssssssssssssssssssssss", selectedSeats);
  return (
    <div className="mt-10 flex flex-col justify-center items-center w-[700px] h-[450px] gap-20">
      <div className="screen">Screen</div>
      <div className="w-full flex flex-col justify-start items-center gap-1">
        {rows.map((row) => (
          <div
            key={row}
            className="flex justify-start items-center w-[98%] h-[50px]"
          >
            <div className="min-w-[165px]">
              <span className=" font-semibold text-3xl text-white max-w-10">
                {row}
              </span>
            </div>

            <div className="flex">
              {seats.map((seat) => (
                <div
                  key={seat}
                  className={`min-h-[30px] cursor-pointer min-w-[35px] m-[5px] bg-${
                    selectedSeats.some(
                      (selectedSeat) =>
                        selectedSeat.row === row && selectedSeat.seat === seat
                    )
                      ? "white"
                      : "slate-800"
                  } rounded-t-2xl`}
                  onClick={() => toggleSeat(row, seat)} // Gọi hàm xử lý khi click vào ghế
                ></div>
              ))}
            </div>
          </div>
        ))}
        <div className="w-[52%] flex justify-start items-center mt-10 ">
          {nums.map((num, index) => (
            <div
              key={index}
              className="w-12 h-10 flex justify-center items-center mx-4"
            >
              <span className="text-xl font-semibold text-white">{num}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Seat;
