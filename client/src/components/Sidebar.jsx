import { Link } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
  return (
    <div className="content">
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src=""
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Life
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
    </div>
  );
  }