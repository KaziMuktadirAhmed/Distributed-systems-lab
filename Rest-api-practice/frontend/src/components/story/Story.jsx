import "./Story.css"

import { Avatar } from '@mui/material'

function Story({imageId, title}) {
  const defaultImg = "./assets/defaultImg.png";
  const imageURL = "http://10.100.104.45:8000/story/post/image/" + imageId;

  return (
    <div style={ { backgroundImage: `url(${imageURL})` } } className='story'>
      <Avatar className='story__avatar' src = { defaultImg }/>
      <h4>{ title }</h4>
    </div>
  )
}

export default Story
