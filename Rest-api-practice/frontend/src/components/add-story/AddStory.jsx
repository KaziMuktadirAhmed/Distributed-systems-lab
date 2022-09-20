import './AddStory.css';

import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStory({ profileSrc, fullName, setRenderReel }) {
  const [file, setFile] = useState();

  const onSubmit = () => {
    const data = new FormData();
    data.append('image', file);

    fetch("http://10.100.104.45:8000/story/post/image", {
      method: "POST",
      credentials: "include",
      body: data,
    }).then(response => response.json()).then(
      obj => {
        postImageID(obj.fileId);
      });
  }

  const postImageID = (storyId) => {
    fetch("http://10.100.104.45:8000/story/post/story", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: fullName,
        id: storyId,
        date: new Date().toDateString()
      }),
    }).then(response => response.json()).then(
      obj =>{
      console.log(obj);
      setRenderReel(prev => !prev);
    });
  }

  return (
    <div className="addStoryWrapper">
      <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        <button 
          className='addBtn'
          onClick={ onSubmit }
        >
          <AddCircleIcon/>
        </button>
        <h4>Add Story</h4>
      </div>
      <input 
        type="file" 
        name="avatar" 
        onChange={ event => {
          const file = event.target.files[0];
          setFile(file)
        }}
      />
    </div>
  ); 
}

export default AddStory