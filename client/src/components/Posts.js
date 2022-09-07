import Post from "./Post";
import '../App.css';

function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  );
}

export default Posts;