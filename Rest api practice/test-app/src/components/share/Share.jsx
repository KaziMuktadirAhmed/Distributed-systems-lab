import './Share.css'

import { useRef } from "react"
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
  const userFullName = "Something";
  const userImg = "";

  const checkUserImg = () => {
    if (userImg === "")
      return "./assets/defaultImg.png"
  }

  const postMsgRef = useRef(null);
  const passwordRef = useRef(null);

  const sharePost = () => {
    fetch("http://localhost:4000/api/post", {
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
        obj => console.log(obj)
    );
  };

  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img className="shareProfileImg" src={ checkUserImg() } alt="Img" />
          <input
            ref = { postMsgRef }
            placeholder="What's in your mind ?"
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
