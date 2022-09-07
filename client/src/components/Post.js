import { Link } from "react-router-dom";
import "../App.css";

export default function Post({post}) {
  return (
    <div className="post">
      {post.photo && (
      <img 
        className="postImg"
        src={post.photo} 
        alt="" 
      />
      )}
      <div className="postInfo">
          <div className="postCats"> 
          {post.categories.map((c)=>(
            <span className="postCat">{c.name}</span>
          ))}
          </div>
          <Link to={post._id}>
            <span className="postTitle">{post.title}</span>
          </Link>
          
      </div>
      <p className="postDesc">{post.desc}
      </p>
    </div>
  );
}