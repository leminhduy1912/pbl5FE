import { useLocation } from "react-router-dom";
import { timestampToDate } from "../utils/ConvertTimestampToDate";

import ModalFixtureOfMovie from "./ModalFixtureOfMovie";
import { useState } from "react";
const MovieDetail = () => {
  const [openModalFixtureMovie, setOpenModalFixtureMovie] = useState(false);
  const toggleModal = () => {
    setOpenModalFixtureMovie(!openModalFixtureMovie);
  };
  const location = useLocation(); // Lấy đối tượng location từ hook useLocation
  const movieData = location.state.movieData; // Truy cập dữ liệu từ state
  console.log("Received movie data:", movieData);
  const date = timestampToDate(movieData.releaseDate);
  const handleGetListTimeOfMovie = () => {
    setOpenModalFixtureMovie(true);
  };
  const image = movieData.moviePoster;
  const id = movieData.id;
  return (
    <div className="container ">
      <ModalFixtureOfMovie
        image={image}
        movieId={id}
        isOpen={openModalFixtureMovie}
        onClose={toggleModal}
      />

      <div className="flex flex-row justify-start lg:flex-row gap-16 lg:items-center">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={"http://localhost:8080/img/" + movieData.moviePoster}
            alt=""
            className="min-w-[400px] min-h-[600px] aspect-square object-cover rounded-xl"
          />
        </div>
        {/* ABOUT */}
        <div className="flex flex-col gap-4 lg:w-4/4 max-w-[1600px] ">
          <div>
            <h1 className="text-3xl font-semibold">{movieData.title}</h1>
          </div>
          <div className="flex flex-col  justify-center items-start gap-5">
            <div className="flex justify-around">
              <span className="font-semibold text-xl min-w-60">
                Đạo diễn :{" "}
              </span>
              <span className="text-xl ">{movieData.director}</span>
            </div>
            <div className="flex justify-around">
              <span className="font-semibold text-xl min-w-60">
                Diễn viên :{" "}
              </span>
              <span className="text-xl ">{movieData.actor}</span>
            </div>
            <div className="flex justify-around">
              <span className="font-semibold text-xl min-w-60">
                Thể loại :{" "}
              </span>
              <span className="text-xl">{movieData.kindName}</span>
            </div>
            <div className="flex justify-around ">
              <span className="font-semibold text-xl min-w-60">
                Thời lượng :{" "}
              </span>
              <span className="text-xl">{movieData.duration}</span>
            </div>
            <div className="flex justify-around ">
              <span className="font-semibold text-xl min-w-60">
                Ngày khởi chiếu :
              </span>
              <span className="text-xl">{date}</span>
            </div>
            <div className="flex justify-around ">
              <span className="font-semibold text-xl min-w-60">Phụ đề : </span>
              <span className="text-xl">{movieData.sub}</span>
            </div>
          </div>
          <p className="text-gray-700 text-xl">{movieData.description}</p>

          <div className="flex flex-row items-center gap-12">
            <button
              className="bg-violet-800 text-white font-semibold py-3 px-16 text-xl rounded-3xl h-full"
              onClick={() => handleGetListTimeOfMovie()}
            >
              Đặt vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
