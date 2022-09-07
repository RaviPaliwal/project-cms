import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../App.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];

  console.log(path);

  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get('/posts/' + path);
        console.log(res)
    };
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {/* {post.photo &&  ( */}
        <img
          className="singlePostImg"
          src=""
          alt=""
        />
        
        <h1 className="singlePostTitle">
          {/* {post.title} */}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
              {/* {post.username} */}
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {/* {post.desc} */}
        </p>
      </div>
    </div>
  )};