import { useEffect, useState } from "react";

import axios from "axios";
import PostCard from "./Postcard";
function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      const response = res.data.data;

      setPosts(response);
    });
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <PostCard key={index} post={post} />
      ))}
    </>
  );
}

export default PostList;
