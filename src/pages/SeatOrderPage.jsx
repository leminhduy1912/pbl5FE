import { useLocation } from "react-router-dom";
import Seat from "../components/Seat";

const SeatOrderPage = () => {
  const location = useLocation();
  const inforOfShowTime = location.state;
  return (
    <div className="flex flex-col justify-start items-center h-[100vh] mt-0 bg-slate-700">
      <div className="relative flex justify-center items-center overflow-x-hidden ">
        <div className="flex justify-between items-center gap-5 mb-2 mt-10 mx-0 py-12 animate-marquee whitespace-nowrap ">
          <span className="text-xl">{inforOfShowTime.movieName}</span>
          <span className="text-xl">Time : {inforOfShowTime.time}</span>
          <span className="text-xl">Rạp : {inforOfShowTime.theaterName}</span>
        </div>
        <div className="flex justify-between items-center gap-5 mb-2 mt-10 mx-0  py-12 animate-marquee2 whitespace-nowrap">
          <span className="text-xl">{inforOfShowTime.movieName}</span>
          <span className="text-xl">Time : {inforOfShowTime.time}</span>
          <span className="text-xl">Rạp : {inforOfShowTime.theaterName}</span>
        </div>
      </div>

      <ul className="bg-slate-700 pt-5   rounded-lg flex justify-center items-center  gap-10 list-none">
        <li className="flex justify-center items-center gap-2 my-10 text-white">
          <div className="h-[30px] w-[35px] m-[5px] bg-slate-800 rounded-t-xl"></div>
          <small className="font-thin text-xl">Empty</small>
        </li>
        <li className="flex justify-center items-center gap-2 my-10">
          <div className="h-[30px] w-[35px] m-[5px] bg-green-500 rounded-t-xl"></div>
          <small className="font-thin text-xl text-white">Selected</small>
        </li>
        <li className="flex justify-center items-center gap-2 my-10">
          <div className="h-[30px] w-[35px] m-[5px] bg-white rounded-t-xl"></div>
          <small className="font-thin text-xl text-white">Ordered</small>
        </li>
      </ul>
      <Seat />
    </div>
  );
};

export default SeatOrderPage;
