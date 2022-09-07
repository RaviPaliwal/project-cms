import Post from "./Post";
import '../App.css';

export default function Posts({posts}) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post post={p}/>
      ))}
    </div>
  );
}