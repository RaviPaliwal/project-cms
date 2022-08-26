import { Link } from "react-router-dom";
import "../App.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://themegoods-cdn-pzbycso8wng.stackpathdns.com/grandblog/demo/wp-content/uploads/2015/11/aboutme.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link className="link" to="/post/:id">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
  }