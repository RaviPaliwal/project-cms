import { BrowserRouter, Routes, Route} from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";

//Function from Routes

export default function routerConfig () {
  return (
    <BrowserRouter>

      <Routes>
          <Route index element={<Home/>}/>
          <Route path="posts" element= {<Home />} />
          <Route path="register" element= {<Register />}/>
          <Route path="login" element= {<Login />}/>
          <Route path="post/:id" element = {<SinglePost />}/>
          <Route path="add-post" element = {<NewPost />}/>
          <Route path="settings" element= {<Settings />}/>
      </Routes>
    </BrowserRouter>
  );
}



/* function: currentUser not defined 
export default function routerConfig () {
    return (
      <Router>
        <Routes>
            <Route exact element="/"><Home/></Route>
            <Route path="/posts" element= {<Home />} />
            <Route path="/register" element= {currentUser ? <Home /> : <Register />}/>
            <Route path="/login" element= {currentUser ? <Home /> : <Login />}/>
            <Route path="/post/:id" element = {<SinglePost />}/>
            <Route path="/add-post" element = {currentUser ? <NewPost /> : <Login />}/>
            <Route path="/settings" element= {currentUser ? <Settings /> : <Login />}/>
          </Routes>
      </Router>
  
    );
  }

  */