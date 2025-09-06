import React, { useState } from "react";

function Likes() {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div>
      <h2>Atividade 1 - Like / Deslike</h2>
      
      <p>👍 Likes: {likes}</p>
      <p>👎 Dislikes: {dislikes}</p>

      <button onClick={() => setLikes(likes + 1)}>Curtir</button>
      <button onClick={() => setDislikes(dislikes + 1)}>Não curtir</button>
    </div>
  );
}

export default Likes;
