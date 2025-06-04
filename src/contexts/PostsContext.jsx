import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PostsContext = createContext();
function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
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
export default { PostsProvider, usePosts };
