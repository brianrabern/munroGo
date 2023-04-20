import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  return (
    <div className="container">
          <Link type="button" className="btn btn-success" to="/map">
            Map
          </Link>
          <Link type="button" className="btn btn-success" to="/munros">
            Munros
          </Link>
          <Link type="button" className="btn btn-success" to="/climbs">
            Climbs
          </Link>
          <Link type="button" className="btn btn-success" to="/reviews">
            Reviews
          </Link>
    </div>
  );
}

export default Dashboard;
