import NewPost from "../routes/NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";
import { useLoaderData } from "react-router-dom";

function PostsList() {
  const posts = useLoaderData();
 
	function addPostHandler(postData) {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
		setPosts((existingPosts) => [postData, ...existingPosts]);
	}
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
