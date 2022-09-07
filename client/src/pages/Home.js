import React from "react";
import { useState, useEffect } from "react";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import "../App.css";
import axios from "axios";
import { useLocation } from "react-router-dom";


export default function Home() {
    const [posts,setPosts] = useState([]);
    const location = useLocation();

    console.log(location);
    
    useEffect(()=>{
      const fetchPosts = async () => {
        const res = await axios.get('/posts/')
        setPosts(res.data)
      }
      fetchPosts();
    },[])

        return (
              <div className="home">
                  <Posts posts ={posts}/>
                  <Sidebar />
              </div>
        );
      }