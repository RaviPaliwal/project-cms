import { useContext } from "react";
import "../App.css";
import axios from "axios";
import { Context } from "../context/Context";
import { useRef } from "react";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const {user,dispatch,isFetching} = useContext(Context);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({type:'LOGIN_START'});
    try {
      const res = axios.post('/auth/login',{
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch ({type:'LOGIN_SUCCESS', payload:res.data});
    } catch (err) {
      dispatch ({type:'LOGIN_FAILURE'});
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input 
        className="loginInput" 
        type="text" 
        placeholder="Enter your username..."
        ref={userRef}
        />
        <label>Password</label>
        <input 
        className="loginInput" 
        type="password" 
        placeholder="Enter your password..." 
        ref={passwordRef}
        />
        <button className="loginButton" type="submit">Login</button>
      </form>
        <button className="loginRegisterButton">Register</button>
    </div>
  )
};