import './AddStory.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStory({ profileSrc }) {
    const handelAdd = () => {
        console.log('added story');
};

  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        <form action="/profile" method="post" enctype="multipart/form-data">
            <input type="file" name="avatar" />
            <button type='submit'>Add story</button>
        </form>
        <h4>Add Story</h4>
    </div>
  ) 
}

export default AddStory