import Seat from "../components/Seat";

const SeatOrderPage = () => {
  return (
    <div className="flex flex-col justify-start items-center h-[100vh] mt-0 bg-slate-700">
      <div className="mb-2 mt-20 mx-0">
        <label className="text-xl text-neutral-50 ">Select a movie :</label>
        <select
          id="movie"
          className="bg-white border-none text-xl ml-10 rounded-xl p-2"
        >
          <option value="150"> Dil Bechara (₹150) </option>
          <option value="180"> Avengers: Endgame (₹180) </option>
          <option value="260"> Dhoni The Untold Story (₹260) </option>
          <option value="390"> URI The surgical strike (₹390) </option>
        </select>
      </div>

      <ul className="bg-slate-700 pt-5   rounded-lg flex justify-center items-center  gap-10 list-none">
        <li className="flex justify-center items-center gap-2 my-10 text-white">
          <div className="h-[30px] w-[35px] m-[5px] bg-slate-800 rounded-t-xl"></div>
          <small className="font-thin text-xl">N/A</small>
        </li>
        <li className="flex justify-center items-center gap-2 my-10">
          <div className="h-[30px] w-[35px] m-[5px] bg-green-500 rounded-t-xl"></div>
          <small className="font-thin text-xl text-white">Selected</small>
        </li>
        <li className="flex justify-center items-center gap-2 my-10">
          <div className="h-[30px] w-[35px] m-[5px] bg-white rounded-t-xl"></div>
          <small className="font-thin text-xl text-white">Occupied</small>
        </li>
      </ul>
      <Seat />
    </div>
  );
};

export default SeatOrderPage;
