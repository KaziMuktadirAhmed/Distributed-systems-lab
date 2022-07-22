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
        </div>
    </div>
  )
}
