import './Post.css';

import { MoreVert } from '@material-ui/icons';

export default function Post({ post }) {
    const postProfileName = post.fullName;
    var postMessage = post?.message;
    var postProfileImg = "";
    const postDate = post.date;

    const checkProfileImg = () => {
        if (postProfileImg === "" )
            return "./assets/defaultImg.png";
    }

  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={ checkProfileImg() } alt="" className="postProfileImg" />
                    <span className="postProfileName">{ postProfileName }</span>
                    <span className="postDate">{ postDate }</span>
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
