import PostList from "../components/PostList";

function PostListPage() {
  return (
    <>
      <h1>Post List Page</h1>
      <div className="container">
        <div className="row">
          <PostList />
        </div>
      </div>
    </>
  );
}

export default PostListPage;
