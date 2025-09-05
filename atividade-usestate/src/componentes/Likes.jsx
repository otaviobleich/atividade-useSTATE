import { useState } from 'react'

function Likes() {
    const[Likes, setlikes] = useState(0);
    const[Dislikes, setDislikes] = useState(0);

  return (
    
      <div style={{textAlign:"center", width: '100vw'}}>

        <h2>Adicione seu like ou dislike</h2>
        
        <p>like: {Likes}</p>
        <p>dislike: {Dislikes}</p>
    
        <button onClick={()=> setlikes(Likes+1)}>Like</button>
        <button onClick={()=> setDislikes(Dislikes+1)}>Dislike</button>

      </div>
     
  )
}

export default Likes