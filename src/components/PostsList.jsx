import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
  
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={post.body} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Yet</h2>
        </div>
      )}
     
    </>
  );
}

export default PostsList;
