import "./Topbar.css";
import { Link } from "react-router-dom";

function Topbar() {
  const user = true;
  return (
    <div className="topbar">
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="topListItem"> <Link className="link" to="/about">About</Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/add-post">Add Post</Link>
            </li>
            {user && <li className="topListItem">Logout</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="topImg"
              src=""
              alt=""
            />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                Login
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}

export default Topbar;
