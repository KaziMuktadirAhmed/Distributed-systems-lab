// rightbar 
import './Rightbar.css'

export default function Rightbar() {
  return (
    <div className='rightbar'>
        <div className="rightbarWrapper">
          <div className="eventContainer">
            <img src="./assets/gift.png" alt="event image" className="eventImg" />
            <span className="eventText">
              <b>Something</b> is going on with something and <b>someone</b> is involded in it so do soemthing
            </span>
          </div>
          <img src="./assets/randomAd.png" alt="Random add for more belivability" className="rightbarAd" />
          <h4 className="rightbarFriendList">Friends</h4>

        </div>
    </div>
  )
}
