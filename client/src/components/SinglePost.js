import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import "../App.css";

export default function SinglePost() {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [post,setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
        const res = await axios.get('/posts/' + path);
        setPost(res.data);
        console.log(res)
    };
    getPost()
  }, [path]);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo &&  (
        <img
          className="singlePostImg"
          src=""
          alt=""
        />)
        }
        
        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <Link to={`/?user=${post.username}`} classname='link'>
            <b className="singlePostAuthor">
              {post.username}
            </b>
            </Link>
          </span>

          <span>
            Date:
            <b className="singlePostDate">
              {new Date(post.createdAt).toDateString()}
            </b>
          </span>
        </div>
        <p className="singlePostDesc">
          {post.desc}
        </p>
      </div>
    </div>
  )};