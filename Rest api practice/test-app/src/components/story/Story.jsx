import "./Story.css"

import { Avatar } from '@mui/material'
import { useState } from "react";

function Story({imageId, title}) {
  const defaultImg = "./assets/defaultImg.png";
  const [imageUrl, setImageUrl] = useState('');

  const fetchImage = (imageId) => {
    fetch("http://localhost:4000/api/post/story/" + imageId, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(response => response.blob()).then(
        obj =>{
          console.log("ok"); 
          setImageUrl(URL.createObjectURL(obj));
          console.log(imageUrl)
        }
    );
  }


  return (
    <div style={ { backgroundImage: `url(${imageUrl})` } } className='story'>
      { fetchImage(imageId) }
      <Avatar className='story__avatar' src = { defaultImg }/>
      <h4>{ title }</h4>
    </div>
  )
}

export default Story