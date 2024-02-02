import { MoonLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading-overlay">
      {" "}
      {/* Thay đổi thành lớp mới */}
      <div className="loading">
        <MoonLoader color="#512da8" size={120} />
      </div>
    </div>
  );
};

export default Loading;
