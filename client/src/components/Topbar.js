import "./Topbar.css";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";
import React, { useContext } from "react";

function Topbar() {
  const { user,dispatch } = useContext(Context);

  const handleLogout = () => {
    dispatch({type:'LOGOUT'});
  };
  
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
            <li className="topListItem" onClick={handleLogout}>{user && 'Logout'}</li>
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
