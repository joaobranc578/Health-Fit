import { useState } from "react";
import axios from "axios";

export default function CommentForm({ productId, onCommentAdded }) {
  const [text, setText] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));

  const sendComment = async () => {
    if (!text.trim()) return;

    await axios.post("http://localhost/salvarComentario.php", {
      productId,
      userId: user.uid,
      userName: user.displayName,
      comment: text
    });

    setText("");
    onCommentAdded();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite seu comentário"
        rows="4"
      />

      <button onClick={sendComment}>Enviar</button>
    </div>
  );
}
