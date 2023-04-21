import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  handlePasswordConfirmationChange,
  handleNameChange,
  reset,
  error,
} from "./features/auth/signupSlice";
import { useSignupMutation } from "./services/auth";
import ErrorNotification from "./ErrorNotification";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const navigate = useNavigate(); // Add useNavigate hook

  const { errorMessage, fields } = useSelector((state) => state.signup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password != fields.passwordConfirmation) {
      dispatch(error("Password does not match confirmation"));
      return;
    }
    const { username, password, full_name } = fields;
    signup({ username, password, full_name });
    await signup(fields);
    dispatch(reset());
    navigate("/login");
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://deih43ym53wif.cloudfront.net/scotland-wild-camping_cac47b8b56.jpeg')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Mountains-By-The-Icon-Z-3322972.svg/600px-Mountains-By-The-Icon-Z-3322972.svg.png?20201122172855"
              width="150"
              alt=""
              srcSet=""
            />
            <h1 className="mb-2 text-2xl">MunroGo</h1>
            <span className="text-gray-300">Enter Signup Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            {errorMessage && (
              <ErrorNotification>{errorMessage}</ErrorNotification>
            )}
            <div className="mb-3">
              <input
                className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={`text`}
                id="Signup__username"
                value={fields.username}
                placeholder="Username"
                onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={`text`}
                id="Signup__full__name"
                value={fields.full_name}
                placeholder="Name"
                onChange={(e) => dispatch(handleNameChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={`password`}
                id="Signup__password"
                value={fields.password}
                placeholder="Password"
                onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md"
                type={`password`}
                id="Signup__password__confirmation"
                value={fields.passwordConfirmation}
                placeholder="Confirm password"
                onChange={(e) =>
                  dispatch(handlePasswordConfirmationChange(e.target.value))
                }
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-moss-green bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600"
              >
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
