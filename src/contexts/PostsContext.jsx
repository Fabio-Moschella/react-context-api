import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostsContext = createContext();
function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/post").then((res) => {
      const response = res.data.data;

      setPosts(response);
    });
  }, []);
  return (
    <PostsContext.Provider
      value={{
        posts,
        setPosts,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
}
function usePosts() {
  const context = useContext(PostsContext);
  return context;
}
export { PostsProvider, usePosts };
