import React from "react";
import { Routes, Route } from "react-router-dom";


//components


//pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";



function App () {
    const currentUser = true;
    return (
      
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="posts" element= {<Home />} />
            <Route path="register" element= {<Register />}/>
            <Route path="login" element= {<Login />}/>
            <Route path="post/:id" element = {<SinglePost />}/>
            <Route path="/add-post" element = {<NewPost />}/>
            <Route path="settings" element= {<Settings />}/>
         </Routes>
      
  );
}

export default App;
