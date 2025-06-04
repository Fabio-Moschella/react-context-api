import { useState } from "react";

import PostCard from "./Postcard";

import { usePosts } from "../contexts/PostsContext";

function PostList() {
  const { posts } = usePosts();

  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
}

export default PostList;
