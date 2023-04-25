import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useLogoutMutation } from "../services/auth";
import { setToken } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    dispatch(setToken(null));
    navigate("/");
  };
  return (
    <button className="btn btn-danger" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default Logout;
