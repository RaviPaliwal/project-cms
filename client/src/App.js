import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./context/Context";

import Topbar from "./components/Topbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import AddPost from "./pages/AddPost";
import Login from "./pages/Login";

export default function App () {
    const { user } = useContext(Context);
    return (
          <>
          <Topbar/>
          <Header />
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element= {<About />} />
            <Route path="/register" element= {<Register />}/>
            <Route path="/login" element= {<Login />}/>
            <Route path="/:id" element = {<Single />}/>
            <Route path="/add-post" element = {<AddPost />}/>
            <Route path="/settings" element= {<Settings />}/>
         </Routes>
         <Footer/>
         </>     
  );
}