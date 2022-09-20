import './Share.css'

import { useRef } from "react"
import { PermMedia, Label, Room, EmojiEmotions } from '@material-ui/icons'

export default function Share({setRenderFeed, fullName}) {
  const userFullName = fullName;
  const postMsgRef = useRef(null);
  const userImg = "";

  const checkUserImg = () => {
    if (userImg === "")
      return "./assets/defaultImg.png"
  }
  const sharePost = () => {
    console.log(userFullName);
    fetch("http://10.100.104.45:8000/status/post", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullName: userFullName,
        message: postMsgRef.current.value,
        date: new Date().toDateString()
      }),
    }).then(response => response.json()).then(
        obj =>{
        console.log(obj)
        setRenderFeed(prev => !prev)
      }
    );
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={ checkUserImg() } alt="Img" />
          <input
            ref = { postMsgRef }
            placeholder={ "what's on your mind " + fullName + " ?" }
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMedia htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <Label htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                    <Room htmlColor="green" className="shareIcon"/>
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton" onClick={ sharePost }>
              Share
            </button>
        </div>
      </div>
    </div>
  );
}
