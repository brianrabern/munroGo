import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useLoginMutation } from "../services/auth";
import { setToken } from "../features/auth/authSlice";
import ErrorNotification from "./ErrorNotification";
import {
  handlePasswordChange,
  handleUsernameChange,
  setError,
  reset,
} from "../features/auth/loginSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { fields, errorMessage } = useSelector((state) => state.login);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(fields);
      dispatch(reset());
      dispatch(setToken(data.access_token));
      navigate("/dashboard");
    } catch (error) {
      dispatch(setError("Invalid username or password."));
    }
  };

  return (
    <>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Mountains-By-The-Icon-Z-3322972.svg/600px-Mountains-By-The-Icon-Z-3322972.svg.png?20201122172855; SameSite=None; Secure"
                width="150"
              />
              <h1 className="mb-2 text-2xl text-neutral-900">MunroGo</h1>
              <span className="text-neutral-900">Enter Login Details</span>
            </div>
            <form onSubmit={handleSubmit} className="items-center">
              <div className="mb-4 flex justify-center text-lg">
                <input
                  className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit text-neutral-900 placeholder-neutral-600 shadow-lg outline-none backdrop-blur-md"
                  type="text"
                  id="Login__username"
                  value={fields.username}
                  placeholder="username"
                  onChange={(e) =>
                    dispatch(handleUsernameChange(e.target.value))
                  }
                />
              </div>

              <div className="mb-4 flex justify-center text-lg">
                <input
                  className="rounded-3xl border-none bg-moss-green bg-opacity-50 px-6 py-2 text-center text-inherit text-neutral-900 placeholder-neutral-600 shadow-lg outline-none backdrop-blur-md"
                  type="password"
                  id="Login__password"
                  value={fields.password}
                  placeholder="password"
                  onChange={(e) =>
                    dispatch(handlePasswordChange(e.target.value))
                  }
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
              <div>
                {errorMessage && (
                  <ErrorNotification>{errorMessage}</ErrorNotification>
                )}
              </div>
            </form>
            <div
              style={{
                display: "flex",
                marginTop: "1rem",
                gap: "5px",
              }}
            >
              <div className="text-neutral-900 justify-center">
                Don't Have An Account?
              </div>
              <Link
                to={{ pathname: "/Signup" }}
                className="text-moss-green justify-center"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
