import ReactDOM from 'react-dom/client';
import {BrowserRouter } from 'react-router-dom';
import App from './App';


// Pages
/*import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import SinglePost from "./pages/SinglePost";
import NewPost from "./pages/NewPost";
*/


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render ( 
    <BrowserRouter>
        <App/>
    </BrowserRouter>   
);