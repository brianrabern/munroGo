import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handlePasswordChange,
  handleUsernameChange,
  handlePasswordConfirmationChange,
  handleNameChange,
  reset,
} from "./features/auth/signupSlice";
import { useSignupMutation } from "./services/auth";
import ErrorNotification from "./ErrorNotification";


const Signup = () => {
    const dispatch = useDispatch()
    const [signup] = useSignupMutation()

    const { errorMessage, fields } = useSelector(state => state.signup)

    const handleSubmit = (e) => {
        e.preventDefault ()
        if (fields.password != fields.passwordConfirmation) {
            dispatch(errorMessage('Password does not mathc confirmation'))
            return;
        }
        const { username, password, full_name } = fields;
        signup({ username,
            password,
            full_name,
        })
        dispatch(reset())
        console.log('handleSubmit');
    }

    return (
        <div className="card">
      <div className="card-body">
        <h5 className="card-title">Signup</h5>
        <hr />
        <form onSubmit={handleSubmit}>
            {errorMessage && <ErrorNotification>{errorMessage}</ErrorNotification>}
          <div className="mb-3">
            <label htmlFor="Signup__username" className="form-label">
              Username:
            </label>
            <input
              className="form-control form-control-sm"
              type={`text`}
              id="Signup__username"
              value={fields.username}
              onChange={(e) => dispatch(handleUsernameChange(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Signup__full__name" className="form-label">
              Name:
            </label>
            <input
              className="form-control form-control-sm"
              type={`text`}
              id="Signup__full__name"
              value={fields.full_name}
              onChange={(e) => dispatch(handleNameChange(e.target.value))}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="Signup__password" className="form-label">
              Password:
            </label>
            <input
              className="form-control form-control-sm"
              type={`password`}
              id="Signup__password"
              value={fields.password}
              onChange={(e) => dispatch(handlePasswordChange(e.target.value))}
            />
          </div>
                    <div className="mb-3">
            <label htmlFor="Signup__password__confirmation" className="form-label">
              Confirm Password:
            </label>
            <input
              className="form-control form-control-sm"
              type={`password`}
              id="Signup__password__confirmation"
              value={fields.passwordConfirmation}
              onChange={(e) => dispatch(handlePasswordConfirmationChange(e.target.value))}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Signup
          </button>
        </form>
      </div>
    </div>
    )
};

export default Signup;
