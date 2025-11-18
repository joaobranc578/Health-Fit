import { useEffect, useState } from "react";
import axios from "axios";

export default function CommentsList({ productId, currentUser }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/comments/${productId}`).then((res) => {
      setComments(res.data);
    });
  }, [productId]);

  const deleteComment = async (id) => {
    await axios.delete(`http://localhost:3001/comments/${id}`);
    setComments(comments.filter((c) => c.id !== id));
  };

  return (
    <div>
      <h2>Comentários</h2>

      {comments.map((c) => (
        <div key={c.id} style={{ background: "#eee", padding: 10, marginTop: 10 }}>
          <strong>{c.user_name}:</strong>
          <p>{c.comment}</p>

          {currentUser && c.user_id === currentUser.uid && (
            <button onClick={() => deleteComment(c.id)}>
              Apagar
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
