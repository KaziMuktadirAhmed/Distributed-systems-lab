import './AddStory.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStory({ profileSrc }) {
  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        <form action="http://localhost:4000/api/post/image/path" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <button type='submit'>
                <AddCircleIcon/>
            </button>
        </form>
        <h4>Add Story</h4>
    </div>
  ) 
}

export default AddStory