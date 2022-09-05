import { Link } from "react-router-dom";
import "../App.css";

export default function Post() {
  return (
    <div className="post">
      <img className="postImg"
        src="" alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">
            <Link className="link" to="/post/:id">
              Category
            </Link>
          </span>
        </div>
        <span className="postTitle">Post Title</span>
        <hr />
      </div>
      <p className="postDesc">
       Lorem Ipsum
      </p>
    </div>
  );
}