import React from "react";

// import { useLocation } from "react-router";
import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Posts from "../components/Posts";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

import "../App.css";


export default function Home() {
      //const location = useLocation();
      //console.log(location);
      return (
        <>
          <Topbar/>
          <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
          <Footer/>
        </>
      );
    }