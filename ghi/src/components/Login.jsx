import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../services/auth";
import {
  handlePasswordChange,
  handleUsernameChange,
  setError,
  reset,
} from "../features/auth/loginSlice";
import ErrorNotification from "./ErrorNotification";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { errorMessage, fields } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(fields);
    if (response.error) {
      dispatch(reset());
      dispatch(setError("Invalid username or password."));
    } else {
      navigate("/dashboard");
    }
  };

  const handleClick = () => {
    dispatch(setError(null));
  };

  return (
    <div
      className="flex h-screen w-full items-center justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://deih43ym53wif.cloudfront.net/scotland-wild-camping_cac47b8b56.jpeg')",
      }}
    >
      <div className="rounded-xl bg-gray-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
        <div className="text-white">
          <div className="mb-8 flex flex-col items-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Mountains-By-The-Icon-Z-3322972.svg/600px-Mountains-By-The-Icon-Z-3322972.svg.png?20201122172855; SameSite=None; Secure"
              width="150"
            />
            <h1 className="mb-2 text-2xl text-neutral-900">MunroGo</h1>
            <span className="text-neutral-900">Enter Login Details</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl bg-moss-green bg-opacity-50 px-10 py-2 text-center text-inherit text-neutral-900 placeholder-neutral-600"
                type="text"
                id="Login__username"
                value={fields.username}
                placeholder="username"
                onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
              />
            </div>

            <div className="mb-4 flex justify-center text-lg">
              <input
                className="rounded-3xl bg-moss-green bg-opacity-50 px-10 py-2 text-center text-inherit text-neutral-900 placeholder-neutral-600"
                type="password"
                id="Login__password"
                value={fields.password}
                placeholder="password"
                onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-black">
              <button
                type="submit"
                className="rounded-3xl bg-moss-green bg-opacity-50 px-10 py-2 shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-yellow-600 text-neutral-900"
              >
                Login
              </button>
            </div>
          </form>
          <div className="flex justify-center py-6">
            <div className="text-neutral-900 px-2">Don't Have An Account?</div>
            <Link to={{ pathname: "/Signup" }} className="text-moss-green">
              Sign Up
            </Link>
          </div>
          <div className="py-5">
            {errorMessage && (
              <ErrorNotification
                message={errorMessage}
                handleClick={handleClick}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
