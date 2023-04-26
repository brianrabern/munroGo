import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../services/auth";

const Logout = () => {
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  return (
    <button className="btn btn-danger" onClick={handleLogOut}>
      Log Out
    </button>
  );
};

export default Logout;
