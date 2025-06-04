import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PostListPage from "./pages/PostListPage";
import PostDetail from "./pages/PostDetail";
import DefaultLayout from "./layout/DefaultLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="AboutUs" element={<AboutUs />} />
        <Route path="posts" element={<PostListPage />} />
        <Route path="PostDetail/:id" element={<PostDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
