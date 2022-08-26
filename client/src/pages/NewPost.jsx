import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NewPost() {
  return (
    <>
    <Topbar/>
    <Header/>
    <div className="content">
    <div className="write">
      <img
        className="writeImg"
        src="x"
        alt=""
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
    </div>
    <Footer/>
    </>
  )};