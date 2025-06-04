import { NavLink } from "react-router-dom";

function PostCard({ post }) {
  const getImageURL = (path) => {
    return `http://localhost:3000${path}`;
  };
  return (
    <div className="col-4 my-3">
      <div className="card h-100 g-2 mt-3">
        <img className="card-img" src={getImageURL(post.image)} alt="" />

        <div className="card-body bg-light ">
          <div className="card-title mb-3">
            <h1 className="fs-2 fw-bold text-info">{post.title}</h1>
          </div>

          <div className="card-text  text-info">{post.content}</div>
          <div className="card-text  text-info">{post.tags}</div>
        </div>
        <NavLink
          to={`/PostDetail/${post.id}`}
          className="btn btn-primary my-3 "
        >
          Vedi Dettagli
        </NavLink>
      </div>
    </div>
  );
}

export default PostCard;
