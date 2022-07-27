import "./Story.css"

import { Avatar } from '@mui/material'
// import { useEffect, useState } from "react";

function Story({imageId, title}) {
  const defaultImg = "./assets/defaultImg.png";
  const imageURL = "http://localhost:4000/api/post/story/" + imageId;

  return (
    <div style={ { backgroundImage: `url(${imageURL})` } } className='story'>
      <Avatar className='story__avatar' src = { defaultImg }/>
      <h4>{ title }</h4>
    </div>
  )
}

export default Story
