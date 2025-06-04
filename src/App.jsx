import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PostListPage from "./pages/PostListPage";
import PostDetail from "./pages/PostDetail";
import DefaultLayout from "./layout/DefaultLayout";
import { PostsProvider } from "./contexts/PostsContext";

function App() {
  return (
    <PostsProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="posts" element={<PostListPage />} />
          <Route path="PostDetail/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </PostsProvider>
  );
}

export default App;
