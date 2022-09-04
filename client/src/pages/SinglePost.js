import Sidebar from "../components/Sidebar";
import SinglePost from "../components/SinglePost";
import Footer from "../components/Footer";

import "../App.css";

export default function Single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
      <Footer/>
    </div>
  )};