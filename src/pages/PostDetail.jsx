import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PostDetail() {
  const { id: postId } = useParams();
  const [post, setPost] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/post/${postId}`)
      .then((res) => {
        setPost(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Errore durante il recupero del post:", err);
        setError("Post non trovato.");
        setLoading(false);
      });
  }, [postId]);

  if (loading) return <p>Caricamento in corso...</p>;
  if (error) return <p>{error}</p>;
  if (!post) return <p>Post non trovato.</p>;

  const getImageURL = (path) => {
    return `http://localhost:3000${path}`;
  };

  return (
    <div className="container my-5">
      <h1 className="mb-4">{post.title}</h1>
      <img
        src={getImageURL(post.image)}
        alt={post.title}
        className="img-fluid mb-4"
      />
      <p>
        <strong>Contenuto:</strong> {post.content}
      </p>
      <p>
        <strong>Tag:</strong> {post.tags}
      </p>
    </div>
  );
}

export default PostDetail;
