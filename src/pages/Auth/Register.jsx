import { useState } from "react";
import Header from "../../components/HomePage/Header";
import { Toaster, toast } from "sonner";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

import Loading from "../../components/Loading/Loading";
const Register = () => {
  // const navigate = useNavigate();
  const [emailSignUp, setEmailSignUp] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUpProcess = (e) => {
    e.preventDefault();

    if (
      confirmPasswordSignUp == "" ||
      passwordSignUp == "" ||
      emailSignUp == ""
    ) {
      toast.error("Empty infor");
    } else {
      if (confirmPasswordSignUp != passwordSignUp) {
        toast.error("Confirm password do not match");
      } else {
        setIsLoading(true);
        let formData = new FormData();
        formData.append("email", emailSignUp);
        formData.append("password", passwordSignUp);
        axios
          .post(
            `${import.meta.env.VITE_API_BE_KEY}/api/v1/auth/register`,
            formData
          )
          .then((response) => {
            // Xử lý dữ liệu phản hồi
            console.log("res", response.data.meta.status_code);
            if (response.data.meta.status_code == 409) {
              console.log("success");
              setIsLoading(false);
              toast.error("Email already in use");
              // navigate("/");
              // dispatch(
              //   login({
              //     // Pass payload as an object
              //     id: response.data.data.id,
              //     token: response.data.data.ACCESS_TOKEN,
              //     roleCode: response.data.data.role,
              //     isLogin: true,
              //   })
              // );
            }
            if (response.data.meta.status_code == 200) {
              setIsLoading(false);
              toast.success("Sign up success");
              // navigate("/");
              // dispatch(
              //   login({
              //     // Pass payload as an object
              //     id: response.data.data.id,
              //     token: response.data.data.ACCESS_TOKEN,
              //     roleCode: response.data.data.role,
              //     isLogin: true,
              //   })
              // );
            }
          })
          .catch((error) => {
            if (error.code == "ERR_BAD_REQUEST") {
              setIsLoading(false);
              toast.error("Invalid Email Or Password");
            }
          });
      }
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      <Toaster position="top-center" closeButton richColors />
      <Header />
      <div className="antialiased bg-white w-full h-full">
        <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
          <h1 className="text-4xl font-medium">Register</h1>
          <p className="text-slate-500">Hi, Welcome back 👋</p>

          <div className="my-5">
            <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                className="w-6 h-6"
                alt=""
              />{" "}
              <span>Register with Google</span>
            </button>
          </div>
          <form action="" className="my-10">
            <div className="flex flex-col space-y-5">
              <label htmlFor="email">
                <p className="font-medium text-slate-700 pb-2">Email address</p>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                  onChange={(e) => setEmailSignUp(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">Password</p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter your password"
                  onChange={(e) => setPasswordSignUp(e.target.value)}
                />
              </label>
              <label htmlFor="password">
                <p className="font-medium text-slate-700 pb-2">
                  Confirm Password
                </p>
                <input
                  id="password"
                  name="password"
                  type="password"
                  className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPasswordSignUp(e.target.value)}
                />
              </label>
              <div className="flex flex-row justify-between"></div>
              <button
                className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center"
                onClick={handleSignUpProcess}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                <span>Register</span>
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                >
                  <span>Log in now </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
