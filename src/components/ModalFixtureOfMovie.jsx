const ModalFixtureOfMovie = () => {
  const listTime = [1, 1, 1, 1];
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-5xl overflow-y-auto sm:rounded-2xl bg-white">
        <div className="w-full">
          <div className="m-8 my-20 mx-auto p-10">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-semibold">Lịch chiếu phim</h1>
              <span className="flex items-center">
                <span className="h-px flex-1 bg-black"></span>
              </span>
            </div>
            <div className="h-[200px] bg-white p-6">
              <div className="flex bg-white shadow-md justify-start md:justify-center rounded-lg overflow-x-scroll mx-auto py-4 px-2  md:mx-12">
                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
                        {" "}
                        Sun{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        11{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
                        {" "}
                        Mon{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        12{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
                        {" "}
                        Tue{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        13
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group bg-regal-blue shadow-lg light-shadow rounded-lg mx-1 cursor-pointer justify-center relative w-16 content-center">
                  {/* <span className="flex h-3 w-3 absolute -top-1 -right-1">
                    <span className="animate-ping absolute group-hover:opacity-75 opacity-0 inline-flex h-full w-full rounded-full bg-purple-400 "></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-regal-blue"></span>
                  </span> */}
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-sm text-white"> Wed </p>
                      <p className="  mt-3 font-bold text-white"> 14 </p>
                      {/* <p className="text-purple-900 text-sm"> Wed </p>
                      <p className="text-purple-900  mt-3 font-bold"> 14 </p> */}
                    </div>
                  </div>
                </div>

                <div className="flex group hover:shadow-regal-blue  hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300 content-center	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-black text-sm transition-all	duration-300">
                        {" "}
                        Thu{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-black  mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        15{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
                        {" "}
                        Fri{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        16{" "}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex group hover:bg-purple-100 hover:shadow-lg hover-light-shadow rounded-lg mx-1 transition-all	duration-300	 cursor-pointer justify-center w-16">
                  <div className="flex items-center px-4 py-4">
                    <div className="text-center">
                      <p className="text-gray-900 group-hover:text-purple-900 text-sm transition-all	duration-300">
                        {" "}
                        Sat{" "}
                      </p>
                      <p className="text-gray-900 group-hover:text-purple-900 mt-3 group-hover:font-bold transition-all	duration-300">
                        {" "}
                        17{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-start gap-10 w-full">
              <div className="w-[200px] h-[200px]">
                <img
                  className=""
                  src="https://metiz.vn/media/poster_film/mai.jpg"
                  alt=""
                />
              </div>

              <div className=" min-w-[400px] h-full grid grid-cols-3  gap-3  ">
                {listTime.map((item, index) => {
                  return (
                    <div
                      className=" w-[140px] h-[80px] bg-white shadow-xl border-2 border-regal-blue  rounded-2xl flex flex-col justify-center items-center gap-2 hover:shadow-regal-blue cursor-pointer pb-4"
                      key={index}
                    >
                      <div className="flex flex-row items-center justify-center gap-2">
                        <div className="flex flex-row items-center justify-center">
                          <span className="bg-transparent text-xl appearance-none outline-none">
                            1
                          </span>
                          <span className="text-xl mr-1 ml-1">:</span>

                          <span className="bg-transparent text-xl appearance-none outline-none mr-0">
                            00
                          </span>
                        </div>
                        <span>-</span>
                        <div className="flex items-center justify-center">
                          <span className="bg-transparent text-xl appearance-none outline-none">
                            1
                          </span>
                          <span className="text-xl mr-1 ml-1">:</span>

                          <span className="bg-transparent text-xl appearance-none outline-none mr-0">
                            00
                          </span>
                        </div>
                      </div>
                      <span className="flex items-center">
                        <span className="h-px flex-1 bg-black">ROOM 3</span>
                      </span>
                      {/* <div>ROOM 3</div> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFixtureOfMovie;
