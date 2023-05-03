import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  handlePasswordConfirmationChange,
  handleNameChange,
  reset,
  setError,
} from "../features/auth/signupSlice";
import { useSignupMutation, useLoginMutation } from "../services/auth";
import ErrorNotification from "./ErrorNotification";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const [signup] = useSignupMutation();
  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const { errorMessage, fields } = useSelector((state) => state.signup);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (fields.password !== fields.passwordConfirmation) {
      dispatch(reset(fields.passwordConfirmation));
      dispatch(setError("Password does not match confirmation"));
      return;
    }
    if (
      fields.username === "" ||
      fields.full_name === "" ||
      fields.password === "" ||
      fields.passwordConfirmation === ""
    ) {
      dispatch(reset());
      dispatch(setError("Fill in all fields."));
      return;
    }
    const { username, password, full_name } = fields;
    let body = { username, password, full_name, rank: "Beginner" };
    const response = await signup(body);
    if (response.error) {
      dispatch(reset());
      dispatch(setError("Fill in all fields."));
    } else {
      await login({ username, password });
      navigate("/dashboard");
    }
  };

  const handleClick = () => {
    dispatch(setError(null));
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
            <img src="./LoginMunro.png" width="150" alt="" />
            <h1 className="mb-2 text-2xl text-neutral-900">MunroGo</h1>
            <span className="text-neutral-900">Enter Signup Details</span>
          </div>
          <form className="flex flex-col items-center" onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                className="rounded-3xl bg-moss-green px-6 py-2 text-center text-neutral-800 placeholder-neutral-600"
                type={`text`}
                id="Signup__username"
                value={fields.username}
                placeholder="Username"
                onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl bg-moss-green px-6 py-2 text-center text-neutral-800 placeholder-neutral-600"
                type={`text`}
                id="Signup__full__name"
                value={fields.full_name}
                placeholder="Name"
                onChange={(e) => dispatch(handleNameChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl bg-moss-green px-6 py-2 text-center text-neutral-800 placeholder-neutral-600"
                type={`password`}
                id="Signup__password"
                value={fields.password}
                placeholder="Password"
                onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
              />
            </div>
            <div className="mb-3">
              <input
                className="rounded-3xl bg-moss-green px-6 py-2 text-center text-neutral-800 placeholder-neutral-600"
                type={`password`}
                id="Signup__password__confirmation"
                value={fields.passwordConfirmation}
                placeholder="Confirm password"
                onChange={(e) =>
                  dispatch(handlePasswordConfirmationChange(e.target.value))
                }
              />
            </div>
            <div className="mt-8 flex justify-center text-lg text-neutral-900">
              <button
                type="submit"
                className="rounded-3xl bg-moss-green px-10 py-2"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="flex justify-center py-6">
            <div className="text-neutral-900 px-2">
              Already Have An Account?
            </div>
            <Link to={{ pathname: "/" }} className="text-moss-green">
              Login
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

export default Signup;
