// rightbar 
import './Rightbar.css'

export default function Rightbar() {
  const userImg = "";
  const userName = "";

  const checkUserImg = () => {
    if (userImg === "")
      return "./assets/defaultImg.png";
  }

  const checkUserName = () => {

    if(userName === "")
      return "Something";
  }

  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="eventContainer">
            <img src="./assets/gift.png" alt="" className="eventImg" />
            <span className="eventText">
              <b>Something</b> is going on with something and <b>someone</b> is involded in it so do soemthing
            </span>
          </div>
          <img src="./assets/randomAd.png" alt="Random add for more belivability" className="rightbarAd" />
          <h4 className="rightbarTitle">Friends</h4>
          <ul className="rightbarFriendList">
            <li className="rightbarFriend">
              <div className="rightbarProfileImgContainer">
                <img 
                  src={ checkUserImg() } 
                  alt="" 
                  className="rightbarProfileImg" 
                />
                <span className="rightbarOnline"></span>
              </div>
              <span className="rightbarUsername">{ checkUserName() }</span>
            </li>
          </ul>
        </div>
    </div>
  )
}
