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
 