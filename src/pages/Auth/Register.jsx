import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/HomePage/Header";
import { useState } from "react";
import axios from "axios";
import Loading from "../../components/Loading/Loading";
import { Toaster, toast } from "sonner";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [action, setAction] = useState("email");
  const [emailSignUp, setEmailSignUp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const handleCheckEmailExist = () => {
    let formData = new FormData();
    formData.append("email", emailSignUp);
    setIsLoading(true);
    axios
      .post(`${import.meta.env.VITE_API_BE_KEY}/api/v1/auth/email`, formData)
      .then((response) => {
        if (response.data.meta.status_code == 200) {
          console.log("success");
          setAction("verify");
          setIsLoading(false);
          setVerifyCode(response.data.data.result.verifyCode);
          console.log(response.data.data.result.verifyCode);
        }
      })
      .catch((error) => {
        if ((error.response.status = 409)) {
          // Xử lý phản hồi từ máy chủ
          setIsLoading(false);
          toast.error("Email has already exist");
        } else if (error.request) {
          // Xử lý khi không có phản hồi từ máy chủ
          console.log(error.request);
        } else {
          // Xử lý khi gặp lỗi khác
          console.log("Error", error.message);
        }
      });
  };
  const handleSignUp = (e) => {
    e.preventDefault();

    if (confirmPassword == "" || password == "") {
      toast.error("Empty infor");
    } else {
      if (confirmPassword != password) {
        toast.error("Confirm password do not match");
      } else {
        setIsLoading(true);
        let formData = new FormData();
        formData.append("email", emailSignUp);
        formData.append("password", password);
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
            }
            if (response.data.meta.status_code == 200) {
              setIsLoading(false);
              toast.success("Sign up success");
              navigate("/");
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
  console.log(verifyCode);
  const handleInputChange = (index, value) => {
    const updatedCode =
      verificationCode.substring(0, index) +
      value +
      verificationCode.substring(index + 1);
    setVerificationCode(updatedCode);
  };
  const handleCheckMatchVerifyCode = () => {
    if (verificationCode !== verifyCode) {
      toast.error("The confirmation code does not match");
    } else {
      setAction("register");
    }
  };
  console.log("check", verificationCode);
  return (
    <>
      <Header />
      <Toaster position="top-center" closeButton richColors />
      {isLoading && <Loading />}
      <div className="bg-gray-100">
        {action == "email" && (
          <div className="min-h-screen flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h1 className="text-xl font-semibold mb-4">Register</h1>
              <p className="text-gray-600 mb-6">
                Change the email address you want associated with your account.
              </p>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                  onChange={(e) => {
                    setEmailSignUp(e.target.value);
                  }}
                />
              </div>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                onClick={() => {
                  handleCheckEmailExist();
                }}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {action == "verify" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12"
            >
              <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
                <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
                  <div className="flex flex-col items-center justify-center text-center space-y-2">
                    <div className="font-semibold text-3xl">
                      <p>Email Verification</p>
                    </div>
                    <div className="flex flex-row text-sm font-medium text-gray-400">
                      <p>
                        We have sent a code to your email{" "}
                        <span className="font-bold text-black">
                          {emailSignUp}
                        </span>{" "}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="flex flex-col space-y-16">
                        <div className="flex flex-row items-center justify-between gap-3 mx-auto w-full max-w-xs">
                          {Array.from({ length: 4 }).map((_, index) => (
                            <div className="w-16 h-16 " key={index}>
                              <input
                                className="w-full h-full text-black flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                                type="password"
                                maxLength={1}
                                value={verificationCode[index] || ""}
                                onChange={(e) =>
                                  handleInputChange(index, e.target.value)
                                }
                              />
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col space-y-5">
                          <div>
                            <button
                              onClick={handleCheckMatchVerifyCode}
                              className="flex flex-row items-center justify-center text-center w-full border rounded-xl outline-none py-5 bg-blue-700 border-none text-white text-sm shadow-sm"
                            >
                              Verify
                            </button>
                          </div>

                          <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                            <p>Didn't recieve code?</p>{" "}
                            <a
                              className="flex flex-row items-center text-blue-600"
                              href="http://"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Resend
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
        {action == "register" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="min-h-screen flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-xl font-semibold mb-4">Register</h1>
                <p className="text-gray-600 mb-6">Enter your information</p>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-5">
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="email-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:border-blue-500"
                    onChange={(e) => {
                      setConfirmPassword(e.target.value);
                    }}
                  />
                </div>

                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
                  onClick={(e) => {
                    handleSignUp(e);
                  }}
                >
                  Submit
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </>
  );
};

export default Register;
