import './AddStory.css';

import { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStory({ profileSrc }) {
  const [file, setFile] = useState();

  const onSubmit = () => {
    // console.log(file);
    const data = new FormData();
    data.append('image', file);
    console.log(data);

    fetch("http://localhost:4000/api/post/image", {
      method: "POST",
      credentials: "include",
      body: data,
    }).then(response => response.json()).then(
        obj => {
          console.log(obj);
        }
    );
  }

  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        {/* <form action="http://localhost:4000/api/post/image" method="post" enctype="multipart/form-data"> */}
            <input 
              type="file" 
              name="avatar" 
              onChange={ event => {
                const file = event.target.files[0];
                setFile(file)
              }}
            />
            <button 
              className='addBtn'
              onClick={ onSubmit }
            >
                <AddCircleIcon/>
            </button>
        {/* </form> */}
        <h4>Add Story</h4>
    </div>
  ) 
}

export default AddStory