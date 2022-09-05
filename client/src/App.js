import React from "react";
import { Routes, Route } from "react-router-dom";

import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";



export default function App () {
    const currentUser = true;
    return (
          <>
          <Topbar/>
          <Header />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="posts" element= {<Home />} />
            <Route path="about" element= {<About />} />
            <Route path="register" element= {<Register />}/>
            <Route path="login" element= {<Login />}/>
            <Route path="post/:id" element = {<SinglePost />}/>
            <Route path="/add-post" element = {<NewPost />}/>
            <Route path="settings" element= {<Settings />}/>
         </Routes>
         <Footer/>
         </>     
  );
}