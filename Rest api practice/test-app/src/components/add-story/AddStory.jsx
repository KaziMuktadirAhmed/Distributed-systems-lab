import './AddStory.css';

import AddCircleIcon from '@mui/icons-material/AddCircle';

function AddStory({ profileSrc }) {
    const handelAdd = () => {
        console.log('added story');
    };

  return (
    <div className='addstory' style={{backgroundImage:`url(${profileSrc})`}}>
        <button
            onClick={ handelAdd }
        >
            <AddCircleIcon/>
        </button> 
      <h4>Add Story</h4>
       
    </div>
  ) 
}

export default AddStory