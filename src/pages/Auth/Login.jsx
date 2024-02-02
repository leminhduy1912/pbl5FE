import { useState } from "react";
import "../Auth/style.css";

import Loading from "../../components/Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { login } from "../../features/auth";
const Login = () => {
  //const token = useSelector((state) => state.authReducer.token);
  const state = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  console.log("token..........", state);
  const [isSignUp, setIsSignUp] = useState(true);
  const [usernameSignIn, setUsernameSignIn] = useState("");
  const [passwordSignIn, setPasswordSignIn] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSignInProcess = (e) => {
    e.preventDefault();

    setIsLoading(true);
    let formData = new FormData();
    formData.append("email", usernameSignIn);
    formData.append("password", passwordSignIn);
    axios
      .post("http://localhost:8080/api/v1/auth/login", formData)
      .then((response) => {
        // Xử lý dữ liệu phản hồi
        setIsLoading(false);
        dispatch(
          login({
            // Pass payload as an object
            id: response.data.data.id,
            token: response.data.data.ACCESS_TOKEN,
            roleCode: response.data.data.role,
          })
        );
      })
      .catch((error) => {
        setIsLoading(false);
        // Xử lý lỗi
        console.error("Error:", error);
      });
  };
  return (
    <>
      {isLoading && <Loading />}
      <div
        className={isSignUp ? "container" : "container active"}
        id="container"
      >
        <div className="form-container sign-up">
          <form>
            <h1>Create Account</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registeration</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form>
            <h1>Sign In</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email password</span>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setUsernameSignIn(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPasswordSignIn(e.target.value)}
            />
            <a href="#">Forget Your Password?</a>
            <button onClick={handleSignInProcess}>Sign In</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button
                className="hidden"
                id="login"
                onClick={() => setIsSignUp(true)}
              >
                Sign In
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>
                Register with your personal details to use all of site features
              </p>
              <button
                className="hidden"
                id="register"
                onClick={() => setIsSignUp(false)}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
