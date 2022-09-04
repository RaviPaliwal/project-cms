import React from "react";

// import { useLocation } from "react-router";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";

import "../App.css";


export default function Home() {
      //const location = useLocation();
      //console.log(location);
      return (
        <>
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
      );
    }