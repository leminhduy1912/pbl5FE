import { useParams } from "react-router-dom";
import { timestampToDate } from "../utils/ConvertTimestampToDate";

import ModalFixtureOfMovie from "./ModalFixtureOfMovie";
import { useEffect, useState } from "react";
import axios from "axios";

const MovieDetail = () => {
  const [openModalFixtureMovie, setOpenModalFixtureMovie] = useState(false);
  const toggleModal = () => {
    setOpenModalFixtureMovie(!openModalFixtureMovie);
  };
  const [dataMovie, setDataMovie] = useState({});
  let { movieId } = useParams();
  movieId = movieId.replace("movieId=", "");

  // Do whatever you want with the movieId
  console.log("Movie ID:", movieId);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_BE_KEY}/api/v1/movie`, {
        params: { id: movieId },
      })
      .then((response) => {
        setDataMovie(response.data.data.result);
      })
      .catch((error) => {
        // Xử lý lỗi
        console.error("Error:", error);
      });
  }, []);

  const handleGetListTimeOfMovie = () => {
    setOpenModalFixtureMovie(true);
  };
  console.log(dataMovie);
  return (
    <>
      {dataMovie !== undefined && (
        <div className="container ">
          <ModalFixtureOfMovie
            image={dataMovie.moviePoster}
            movieId={dataMovie.id}
            isOpen={openModalFixtureMovie}
            onClose={toggleModal}
          />

          <div className="flex flex-row justify-start lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={"http://localhost:8080/img/" + dataMovie.moviePoster}
                alt=""
                className="min-w-[400px] min-h-[600px] aspect-square object-cover rounded-xl"
              />
            </div>
            {/* ABOUT */}
            <div className="flex flex-col gap-4 lg:w-4/4 max-w-[1600px] ">
              <div>
                <h1 className="text-3xl font-semibold">{dataMovie.title}</h1>
              </div>
              <div className="flex flex-col  justify-center items-start gap-5">
                <div className="flex justify-around">
                  <span className="font-semibold text-xl min-w-60">
                    Đạo diễn :{" "}
                  </span>
                  <span className="text-xl ">{dataMovie.director}</span>
                </div>
                <div className="flex justify-around">
                  <span className="font-semibold text-xl min-w-60">
                    Diễn viên :{" "}
                  </span>
                  <span className="text-xl ">{dataMovie.actor}</span>
                </div>
                <div className="flex justify-around">
                  <span className="font-semibold text-xl min-w-60">
                    Thể loại :{" "}
                  </span>
                  <span className="text-xl">{dataMovie.kindName}</span>
                </div>
                <div className="flex justify-around ">
                  <span className="font-semibold text-xl min-w-60">
                    Thời lượng :{" "}
                  </span>
                  <span className="text-xl">{dataMovie.duration}</span>
                </div>
                <div className="flex justify-around ">
                  <span className="font-semibold text-xl min-w-60">
                    Ngày khởi chiếu :
                  </span>
                  <span className="text-xl">
                    {timestampToDate(dataMovie.releaseDate)}
                  </span>
                </div>
                <div className="flex justify-around ">
                  <span className="font-semibold text-xl min-w-60">
                    Phụ đề :{" "}
                  </span>
                  <span className="text-xl">{dataMovie.sub}</span>
                </div>
              </div>
              <p className="text-gray-700 text-xl">{dataMovie.description}</p>

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
      )}
    </>
  );
};

export default MovieDetail;
