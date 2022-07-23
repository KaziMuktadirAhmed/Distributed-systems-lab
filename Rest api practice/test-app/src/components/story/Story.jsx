import "./Story.css"

import { Avatar } from '@mui/material'

function Story({image, title}) {
  const defaultImg = "./assets/defaultImg.png"
  return (
    <div style={{backgroundImage: `url(${image})`}} className='story'>
    <Avatar className='story__avatar' src = { defaultImg }/>
    <h4>{ title }</h4>
    </div>
  )
}

export default Story