import './Post.css';

import { MoreVert } from '@material-ui/icons';

export default function Post() {
    const postProfileName = "Something";
    var postMessage = "Such a load of crap shit";
    var postProfileImg = "";
    const postDate = new Date();

    const checkProfileImg = () => {
        if (postProfileImg === "" )
            return "./assets/defaultImg.png";
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={ checkProfileImg() } alt="image" className="postProfileImg" />
                    <span className="postProfileName">{ postProfileName }</span>
                    <span className="postDate">{ postDate.toDateString() }</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">
                    { postMessage }
                </span>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
