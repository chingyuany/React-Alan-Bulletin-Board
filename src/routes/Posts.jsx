import PostList from "../components/PostsList";
import { Outlet } from "react-router-dom";
import { useState } from "react";
function Posts() {
  
  return (
    <>
    <Outlet/>
      <main>
        <PostList/>
      </main>
    </>
  );
}

export default Posts;
export async function loader(){
        const response = await fetch('http://localhost:8080/posts');
        const resData = await response.json();
        return resData.posts;
}